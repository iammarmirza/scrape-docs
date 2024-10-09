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
const GUIDE_PAGES_PATH = "guides/default-guide/version-1";
const GUIDE_FOLDER_PATH = "guides/default-guide";

async function scrapeWebsite(url) {
  try {
    const response = await fetch(url);
    const pageHtml = await response.text();

    const doc = new JSDOM(pageHtml, {
      url,
      virtualConsole,
    });

    // Find the breadcrumb navigation
    const breadcrumbNav = doc.window.document.querySelector(
      'nav[aria-label="breadcrumb"]'
    );

    // Extract breadcrumb items
    const breadcrumbs = [];
    if (breadcrumbNav) {
      const breadcrumbItems =
        breadcrumbNav.querySelectorAll("a, span:last-child");

      breadcrumbItems.forEach((item) => {
        if (item.tagName === "SPAN" && item.textContent?.trim()) {
          breadcrumbs.push(item.textContent?.trim());
        }
      });
    }

    // Remove all <style> elements
    const styleElements = doc.window.document.querySelectorAll("style");
    styleElements.forEach((element) => element.remove());

    // Remove all <script> elements
    const scriptElements = doc.window.document.querySelectorAll("script");
    scriptElements.forEach((element) => element.remove());

    // Remove all links that point to the same domain
    const links = doc.window.document.querySelectorAll('a[href^="/"]');
    links.forEach((link) => link.remove());

    // Try to remove possible navigation elements
    const navElements = doc.window.document.querySelectorAll(
      'nav, ul[id^="nav"], ul[class^="nav"], div[id^="nav"], div[class^="nav"]'
    );
    navElements.forEach((navElement) => navElement.remove());

    // Get the cleaned HTML
    const cleanedHtml = doc.window.document.body.innerHTML;

    const article = {
      title: doc.window.document.title,
      content: cleanedHtml,
      url,
      breadcrumbs,
    };
    return article;
  } catch (error) {
    console.log("An error occurred:", { error });
  }
  return null;
}

const createFileWithContent = async (path, content) => {
  const parsedArticle = await parseFile(content);
  const frontMatter = mapCrawledContentToMarkdown(parsedArticle);
  const markdown = turndownService.turndown(parsedArticle.content);
  const fileContent = matter.stringify(markdown, frontMatter);

  fs.writeFile(path, fileContent, function (err) {
    if (err) return console.log(err);
    console.log(`File ${path} created`);
  });
};

const guideConfigPath = `${GUIDE_FOLDER_PATH}/config.ts`;
fs.mkdirSync(GUIDE_FOLDER_PATH, { recursive: true });
const guideConfigContent = `export default ${JSON.stringify(
  {
    variant: "GUIDE",
    settings: {
      name: "default-guide",
      slug: "default-guide",
    },
  },
  null,
  2
)};`;
fs.writeFile(guideConfigPath, guideConfigContent, function (err) {
  if (err) return console.log(err);
});
fs.mkdirSync(GUIDE_PAGES_PATH, { recursive: true });

function getPaths(pages, result = []) {
  pages.forEach((page) => {
    if (page.path) {
      result.push(page.path);
    }
    if (page.pages) {
      getPaths(page.pages, result);
    }
  });
  return result;
}

const allPaths = config.reduce((acc, section) => {
  if (section.pages) {
    return acc.concat(getPaths(section.pages));
  }
  return acc;
}, []);

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function scrapeWithThrottle(paths, delayDuration = 1000) {
  for (let i = 0; i < paths.length; i++) {
    const path = paths[i];
    const article = await scrapeWebsite(`https://docs.deepsource.com${path}`);
    if (article) {
      const filePath = `${GUIDE_PAGES_PATH}/${path.split("/").pop()}.mdx`;
      await createFileWithContent(filePath, article);
    }
    await delay(delayDuration);
  }
}

scrapeWithThrottle(allPaths);
