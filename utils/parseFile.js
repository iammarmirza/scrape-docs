import { default as matter } from "gray-matter";

export const parseFile = async (content) => {
  const parsedArticle = matter(content, { language: "yaml" });
  return parsedArticle;
};
