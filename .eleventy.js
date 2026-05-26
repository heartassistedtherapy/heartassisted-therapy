const markdownIt = require("markdown-it");
const md = new markdownIt();

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("qr-code.png");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addFilter("markdown", content => md.render(content));

  return {
      dir: {
          input: ".",
          data: "_data",
      }
  }
};
