// Per 11ty from scratch, we have to have a module.exports definition
module.exports = (eleventyConfig) => {

  // Make Liquid capable of rendering "partials"
  eleventyConfig.setLiquidOptions({
    dynamicPartials: true,
    strict_filters: true,
  });

  // Pass CSS straight through from "src" to "dist"
  eleventyConfig.addPassthroughCopy("./src/css/");

  // Specify that the "src" folder is for input and the "dist" folder is for output
  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
// End of module.exports definition