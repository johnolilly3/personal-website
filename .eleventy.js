<antArtifact identifier="eleventy-basic-config" type="application/vnd.ant.code" language="javascript" title="Basic 11ty Configuration">
module.exports = function(eleventyConfig) {
  // Copy assets directly
  eleventyConfig.addPassthroughCopy('src/assets');

  return {
    dir: {
      input: 'src',
      output: '_site',
      includes: '_includes',
      data: '_data'
    },
    templateFormats: ['md', 'njk', 'html'],
    markdownTemplateEngine: 'njk'
  };
};
