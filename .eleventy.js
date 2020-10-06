const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight"),
      markdownIt = require('markdown-it');
module.exports = eleventyConfig => {
  eleventyConfig.addPlugin(syntaxHighlight);

  eleventyConfig.setTemplateFormats([
    "md",
    "html",
    "txt",
    "jpeg",
    "jpg",
    "png",
    "GIF",
    "wav",
    "mp3"
  ]);
  eleventyConfig.addPassthroughCopy("style");
  eleventyConfig.addPassthroughCopy("webfonts");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("CNAME");

  eleventyConfig.addPassthroughCopy('favicon.ico');

  let markdownIt = require("markdown-it");
  let markdownItDeflist = require("markdown-it-deflist");
  let markdownItFootnote = require("markdown-it-footnote");
  let markdownItAnchor = require("markdown-it-anchor");
  let markdownItTocDoneRight = require("markdown-it-toc-done-right");
  let markdownItAttrs = require("markdown-it-attrs");
  let markdownItTaskLists = require("markdown-it-task-lists");
  let markdownItEmoji = require("markdown-it-emoji");

  const options = {
    html: true,
    breaks: true,
    linkify: false
  };
  let markdownLib = markdownIt(options).use(markdownItDeflist).use(markdownItFootnote).use(markdownItAnchor).use(markdownItTocDoneRight).use(markdownItAttrs).use(markdownItTaskLists).use(markdownItEmoji);
  eleventyConfig.setLibrary("md", markdownLib);

  return {
    // Use liquid in html templates
    markdownTemplateEngine: "njk"
  };
};
