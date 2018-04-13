process.env.NODE_ENV = "production";

const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.base.js");

module.exports = merge(common, {
  mode: "production",
  entry: {
    vendor: ["vue", "vuex", "vue-router", "vuex-router-sync"]
  },
  output: {
    path: path.resolve(__dirname, "../../dist/client"),
    filename: "[name].[hash].js"
  },
  devtool: "cheap-module-source-map",
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all"
        }
      }
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": '"production"'
    })
  ]
});
