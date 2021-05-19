const { override, addWebpackAlias } = require("customize-cra")
const path = require("path")

module.exports = override(
  addWebpackAlias({
    ["@"]: path.resolve(__dirname, "src"),
    ["@a"]: path.resolve(__dirname, "src/asset"),
    ["@c"]: path.resolve(__dirname, "src/component")
  })
)