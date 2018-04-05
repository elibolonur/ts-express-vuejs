const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.base.js");

module.exports = merge(common, {
  mode: "production",
  output: {
    path: path.resolve(__dirname, "../../dist/client"),
    filename: "[name].js"
  }
});
