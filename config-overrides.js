// config-overrides.js
const { override, addWebpackAlias } = require("customize-cra");
const path = require("path");

module.exports = override(
  addWebpackAlias({
    "@components": path.resolve(__dirname, "src/components"),
    "@utils": path.resolve(__dirname, "src/utils"),
    "@styledComponents": path.resolve(__dirname, "src/styledComponents"),
    "@styles": path.resolve(__dirname, "src/styles"),
  })
);
