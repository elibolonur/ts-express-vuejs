"use strict";
const path = require("path");
const webpack = require("webpack");
const utils = require("./utils");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/client/app.js",
    vendor: ["vue", "vuex", "vue-router", "vuex-router-sync"]
  },
  resolve: {
    extensions: ["*", ".js", ".vue", ".json"],
    alias: {
      vue: "vue/dist/vue.esm.js",
      style: path.resolve(__dirname, "../../src/client/style"),
      assets: path.resolve(__dirname, "../../src/client/assets")
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: utils.vueLoaderOptions
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.(png|jpg|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: "file-loader",
            options: { name: "[name].[ext]", context: "" }
          }
        ]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: utils.scssLoaders
        })
      },
      {
        test: /\.(woff|woff2)$/,
        use: [
          {
            loader: "file-loader",
            options: { name: "[name].[ext]", context: "" }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/client/index.html",
      inject: true
    }),
    new ExtractTextPlugin({
      filename: "style.[hash].css",
      disable: false,
      allChunks: true
    })
  ]
};
