process.env.NODE_ENV = "development";

const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.base.js");
const webpack = require("webpack");

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "[name].[hash].js",
    path: "/dist",
    publicPath: "/"
  },
  devtool: "cheap-module-eval-source-map",
  devServer: {
    hot: true,
    contentBase: path.resolve(__dirname, "../../dist"),
    port: 8080,
    clientLogLevel: "none",
    historyApiFallback: true,
    host: "0.0.0.0",
    overlay: {
      warnings: false,
      errors: true
    },
    // open: true or "Google Chrome",
    // openPage: "/different/page",
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": '"development"'
    }),
  ]
});
