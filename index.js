import { JSDOM, VirtualConsole } from "jsdom";
import fs from "fs";
import { default as matter } from "gray-matter";
import TurndownService from "turndown";
import { mapCrawledContentToMarkdown } from "./utils/mapCrawledContentToMarkdown.js";
import { parseFile } from "./utils/parseFile.js";
import { config } from "./config.js";

const virtualConsole = new VirtualConsole();
virtualConsole.on("error", () => {
  // No-op to skip console errors.
});

const turndownService = new TurndownService();
const DOCS_URL = "https://docs.gitbook.com";
const GUIDE_NAME = "Default Guide";
const GUIDE_SLUG = "default-guide";
const GUIDE_PAGES_PATH = `guides/${GUIDE_SLUG}/version-1`;
const GUIDE_FOLDER_PATH = `guides/${GUIDE_SLUG}`;
const GUIDE_CONFIG_PATH = `${GUIDE_FOLDER_PATH}/config.ts`;
const VERSION_CONFIG_PATH = `${GUIDE_PAGES_PATH}/config.ts`;
const GUIDE_CONFIG_CONTENT = `export default ${JSON.stringify(
  {
    variant: "GUIDE",
    settings: {
      name: GUIDE_NAME,
      slug: GUIDE_SLUG,
    },
  },
  null,
  2
)};`;

const VERSION_CONFIG = {
  settings: { name: "V1", slug: "v1", isDefault: true },
  sidebar: [],
};

function buildPageStructure(pages) {
  return pages.map((page) => {
    if(page.type === "link") return;
    if (page.type === "section") {
      return {
        type: "section",
        label: page.label,
        visibility: "PUBLIC",
        pages: buildPageStructure(page.pages || []),
      };
    }
    return {
      type: "page",
      path: page.path === "/" ? "./introduction.mdx" : `.${page.path}.mdx`,
      pages: buildPageStructure(page.pages || []),
    };
  });
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const createGuideConfig = async () => {
  await fs.promises.mkdir(GUIDE_PAGES_PATH, { recursive: true });
  await fs.promises.writeFile(GUIDE_CONFIG_PATH, GUIDE_CONFIG_CONTENT);
};

// async function scrapeWebsite(url) {
//   try {
//     const response = await fetch(url);
//     const pageHtml = await response.text();

//     const doc = new JSDOM(pageHtml, {
//       url,
//       virtualConsole,
//     });

//     // Find the breadcrumb navigation
//     const breadcrumbNav = doc.window.document.querySelector(
//       'nav[aria-label="breadcrumb"]'
//     );

//     // Extract breadcrumb items
//     const breadcrumbs = [];
//     if (breadcrumbNav) {
//       const breadcrumbItems =
//         breadcrumbNav.querySelectorAll("a, span:last-child");

//       breadcrumbItems.forEach((item) => {
//         if (item.tagName === "SPAN" && item.textContent?.trim()) {
//           breadcrumbs.push(item.textContent?.trim());
//         }
//       });
//     }

//     // Remove all <style> elements
//     const styleElements = doc.window.document.querySelectorAll("style");
//     styleElements.forEach((element) => element.remove());

//     // Remove all <script> elements
//     const scriptElements = doc.window.document.querySelectorAll("script");
//     scriptElements.forEach((element) => element.remove());

//     // Remove all links that point to the same domain
//     const links = doc.window.document.querySelectorAll('a[href^="/"]');
//     links.forEach((link) => link.remove());

//     // Try to remove possible navigation elements
//     const navElements = doc.window.document.querySelectorAll(
//       'nav, ul[id^="nav"], ul[class^="nav"], div[id^="nav"], div[class^="nav"]'
//     );
//     navElements.forEach((navElement) => navElement.remove());

//     // Get the cleaned HTML
//     const cleanedHtml = doc.window.document.body.innerHTML;

//     const article = {
//       title: doc.window.document.title,
//       content: cleanedHtml,
//       url,
//       breadcrumbs,
//     };
//     return article;
//   } catch (error) {
//     console.log("An error occurred:", { error });
//   }
//   return null;
// }

async function scrapeGitbookDocs(url) {
  try {
    const response = await fetch(url);
    const pageHtml = await response.text();

    const doc = new JSDOM(pageHtml, {
      url,
      virtualConsole,
    });

    // Remove all <style> and <script> elements
    const styleElements = doc.window.document.querySelectorAll("style, script");
    styleElements.forEach((element) => element.remove());

    // Remove sidebar, header, and footer
    const unwantedSections = doc.window.document.querySelectorAll(
      "header, aside, footer, nav"
    );
    unwantedSections.forEach((section) => section.remove());

    // More generalized selector for the main content
    const bodyContainer = doc.window.document.querySelector(
      'main, div[class*="content"]' // Try to find the main tag or a div with "content" in its class
    );

    // Check if the body container exists and extract its inner HTML
    const contentHtml = bodyContainer ? bodyContainer.innerHTML : "";

    const article = {
      title: doc.window.document.title,
      content: contentHtml.trim(),
      url,
    };

    return article;
  } catch (error) {
    console.log("An error occurred:", { error });
    return null;
  }
}


const createFileWithContent = async (path, content) => {
  const filePath =
    path === "/"
      ? `${GUIDE_PAGES_PATH}/introduction.mdx`
      : `${GUIDE_PAGES_PATH}${path}.mdx`;

  const dirPath = filePath.substring(0, filePath.lastIndexOf("/"));
  await fs.promises.mkdir(dirPath, { recursive: true });
  const parsedArticle = await parseFile(content);
  const frontMatter = mapCrawledContentToMarkdown(parsedArticle);
  const markdown = turndownService.turndown(parsedArticle.content);
  const fileContent = matter.stringify(markdown, frontMatter);

  fs.writeFile(filePath, fileContent, function (err) {
    if (err) console.log(err);
    console.log(`File created: ${filePath}`);
  });
};

function getNormalizedPaths(pages, result = []) {
  pages.forEach((page) => {
    if (page.path) {
      result.push(page.path);
    }
    if (page.pages) {
      getNormalizedPaths(page.pages, result);
    }
  });
  return result;
}

const normalizedPaths = config.reduce((acc, obj) => {
  const isSection = obj.type === 'section';
  const isPage = obj.type === 'page';
  const isLink = obj.type === 'link';
  if (isLink) {
    return acc;
  }
  const hasSubpages = !isLink && obj.pages && obj.pages.length > 0;
  if (isSection && hasSubpages) {
    return acc.concat(getNormalizedPaths(obj.pages));
  }
  if (isPage && hasSubpages) {
    return acc.concat(getNormalizedPaths(obj.pages));
  }
  if (isPage && !hasSubpages) {
    return acc.concat(obj.path);
  }
  return acc;
}, []);

async function scrapeWithThrottle(path, delayDuration = 1000) {
  const article = await scrapeWebsite(`${DOCS_URL}${path}`);
  if (article) {
    await createFileWithContent(path, article);
  }
  await delay(delayDuration);
}

const createMdxFiles = async (normalizedPaths) => {
  for (const path of normalizedPaths) {
    await scrapeWithThrottle(path);
  }
};


const run = async () => {
  await createGuideConfig();
  await createMdxFiles(normalizedPaths);
  VERSION_CONFIG.sidebar = buildPageStructure(config);
  const versionConfigContent = `export default ${JSON.stringify(VERSION_CONFIG, null, 2)};`;
  fs.writeFileSync(VERSION_CONFIG_PATH, versionConfigContent, "utf8");
};

run();
