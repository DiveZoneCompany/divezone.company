import { EleventyHtmlBasePlugin, EleventyRenderPlugin } from "@11ty/eleventy";
import eleventyNavigationPlugin from "@11ty/eleventy-navigation";

import collections from "./src/collections.js";
import filters from "./src/filters.js";
import helpers from "./src/helpers.js";
import shortcodes from "./src/shortcodes.js";
import transforms from "./src/transforms.js";

export default async function (eleventyConfig) {
  let prodMode;
  // config
  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true,
  });
  // events
  eleventyConfig.on('eleventy.before', async ({ runMode }) => {
    prodMode = runMode === 'build';
  });
  // collections
  eleventyConfig.addCollection('brandsSorted', collections.brandsSorted);
  // filters
  eleventyConfig.addFilter('htmlDateString', filters.htmlDateString);
  eleventyConfig.addFilter('md', filters.md);
  eleventyConfig.addFilter('zonify', filters.zonify);
  // global data
  eleventyConfig.addGlobalData('eleventyComputed.permalink', function () {
    return (data) => helpers.draftPermaLink(data, prodMode);
  });
  eleventyConfig.addGlobalData('eleventyComputed.eleventyExcludeFromCollections', function () {
    return (data) => helpers.draftExcludeFromCollections(data, prodMode);
  });
  // plugins
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(EleventyRenderPlugin);
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  // static
  eleventyConfig.addPassthroughCopy({ 'src/static': '/' });
  // shortcodes
  eleventyConfig.addShortcode('year', shortcodes.year);
  // transform
  eleventyConfig.addTransform('format', function (content) {
    if (prodMode) {
      // minify for production build
      return transforms.minify(content, this.page.outputPath);
    }
    // prettify for develop mode
    return transforms.prettify(content, this.page.outputPath);
  });

  // build
  return {
    dir: {
      input: 'src/site',
      output: 'public',
    },
  };
};
