module.exports = function(eleventyConfig) {
  // Copy assets directly to the output
  eleventyConfig.addPassthroughCopy('src/assets');

  // Create a collection for blog posts
  eleventyConfig.addCollection('posts', function(collection) {
    return collection.getFilteredByGlob('src/posts/*.md')
      .sort((a, b) => new Date(b.data.date) - new Date(a.data.date));
  });

  // Add some useful filters
  // Format dates
  eleventyConfig.addFilter('dateFormat', function(date) {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  });

  // Return an excerpt from a blog post
  eleventyConfig.addFilter('excerpt', function(post) {
    const content = post.content;
    return content.substring(0, 250) + '...';
  });

  // Configuration options
  return {
    dir: {
      input: 'src',
      output: '_site',
      includes: '_includes',
      data: '_data'
    },
    templateFormats: ['md', 'njk', 'html'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk'
  };
};
