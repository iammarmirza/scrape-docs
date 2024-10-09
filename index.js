import { JSDOM, VirtualConsole } from "jsdom";
import fs from "fs";
import { default as matter } from "gray-matter";
import TurndownService from "turndown";
import { mapCrawledContentToMarkdown } from "./utils/mapCrawledContentToMarkdown.js";
import { parseFile } from "./utils/parseFile.js";
import { config } from "./constant.js";

const virtualConsole = new VirtualConsole();
virtualConsole.on("error", () => {
  // No-op to skip console errors.
});

const turndownService = new TurndownService();

async function scrapeWebsite(url) {
  try {
    const response = await fetch(url, { signal: AbortSignal.timeout(5000) });
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
    log.error("An error occurred:", { error });
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

config.forEach((section) => {
  const guideLabel = section.label;
  const guideFolderPath = `guides/${guideLabel}/version-1`;
  fs.mkdirSync(guideFolderPath, { recursive: true });
  const guideConfigPath = `guides/${guideLabel}/config.ts`;
  const guideConfigContent = `export default ${JSON.stringify(
    {
      variant: "GUIDE",
      settings: {
        name: section.label,
        slug: section.label.toLowerCase(),
      },
    },
    null,
    2
  )};`;
  fs.writeFile(guideConfigPath, guideConfigContent, function (err) {
    if (err) return console.log(err);
    console.log(`File`);
  });

  const sectionSidebar = [];

  section.pages.forEach((page) => {
    // if (page.pages && page.pages.length > 0) {
    //   const subGuideFolder = `${guideFolder}/${page.path.split("/").pop()}`;
    //   fs.mkdirSync(subGuideFolder, { recursive: true });
    //   page.pages.forEach((subPage) => {
    //     scrapeWebsite(`https://docs.deepsource.com${subPage.path}`).then(
    //       (article) => {
    //         const pagePath = subPage.path.split("/").pop();
    //         createFileWithContent(
    //           `./${subGuideFolder}/${pagePath}.mdx`,
    //           article,
    //           guideLabel
    //         );
    //       }
    //     );
    //   });
    // }

    const sectionConfigContent = `export default ${JSON.stringify(
      {
        settings: {
          name: "V1",
          slug: "v1",
          isDefault: true,
        },
        sidebar: sectionSidebar,
      },
      null,
      2
    )};`;

    sectionSidebar.push({
      type: "page",
      path: `./${page.path.split("/").pop()}.mdx`,
    });

    fs.writeFile(
      `${guideFolderPath}/config.ts`,
      sectionConfigContent,
      function (err) {
        if (err) return console.log(err);
        console.log(`File`);
      }
    );

    scrapeWebsite(`https://docs.deepsource.com${page.path}`).then((article) => {
      const pagePath = page.path.split("/").pop();
      createFileWithContent(`./${guideFolderPath}/${pagePath}.mdx`, article);
    });
  });
});
