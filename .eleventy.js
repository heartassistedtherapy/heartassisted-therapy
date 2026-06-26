const markdownIt = require("markdown-it");
const md = markdownIt({
    html: true,
    breaks: true,
    linkify: true,
});

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("qr-code-520.png");
    eleventyConfig.addPassthroughCopy("qr-code-550.png");
    eleventyConfig.addPassthroughCopy("admin");
    eleventyConfig.addFilter("markdown", (content) => md.render(content));
    eleventyConfig.addFilter("markdown", (content) => {
        if (typeof content !== "string") {
            console.log("Markdown filter received:", content);
            return "";
        }

        return md.render(content);
    });

    return {
        dir: {
            input: ".",
            data: "_data",
        },
    };
};
