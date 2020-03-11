const withMDX = require("@next/mdx")();
const rehypePrism = require("@mapbox/rehype-prism");

module.exports = withMDX({
  extension: /\.mdx?$/,
  rehypePlugins: [rehypePrism],
  webpack: config => {
    config.node = {
      // ...config.node,
      fs: "empty"
    };

    return config;
  }
});
