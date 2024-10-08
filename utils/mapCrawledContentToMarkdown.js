export const mapCrawledContentToMarkdown = (parsedArticle, label) => {
  const input = {
    title: parsedArticle.title,
    slug: parsedArticle.url.split("/").pop(),
    visibility: "PUBLIC",
    label,
    ogImage: null,
    seoTitle: null,
    seoDescription: null,
  };
  return input;
};
