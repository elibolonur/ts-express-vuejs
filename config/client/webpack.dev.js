const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.base.js");
const webpack = require("webpack");

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "[name].js",
    path: "/dist",
    publicPath: "/"
  },
  devServer: {
    hot: true,
    contentBase: path.resolve(__dirname, "../../dist")
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});
