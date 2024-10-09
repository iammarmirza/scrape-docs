export const mapCrawledContentToMarkdown = (parsedArticle) => {
  const input = {
    title: parsedArticle.title,
    slug: parsedArticle.url.split("/").pop(),
    visibility: "PUBLIC",
    label: parsedArticle.title,
  };
  return input;
};
