module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("qr-code.png");
  eleventyConfig.addPassthroughCopy("admin");
};
