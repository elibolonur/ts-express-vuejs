"use strict";
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const cssLoader = {
  loader: "css-loader",
  options: {
    sourceMap: "production" === process.env.NODE_ENV ? false : true,
    importLoaders: 1
  }
};

const sassLoader = {
  loader: "sass-loader",
  options: {
    sourceMap: "production" === process.env.NODE_ENV ? false : true,
    outputStyle: "production" === process.env.NODE_ENV ? "compressed" : "nested"
  }
};

const sassResLoader = {
  loader: "sass-resources-loader",
  options: {
    resources: path.resolve(__dirname, "../../src/client/style/global.scss")
  }
};

const vueScssPROD =  ExtractTextPlugin.extract({
  fallback: "vue-style-loader",
  use: [
    {
      loader: "css-loader",
      options: {
        sourceMap: "production" === process.env.NODE_ENV ? false : true,
        options: { minimize: true },
        importLoaders: 1
      }
    },
    {
      loader: "sass-loader",
      options: {
        sourceMap: "production" === process.env.NODE_ENV ? false : true,
        outputStyle: "production" === process.env.NODE_ENV ? "compressed" : "nested"
      }
    },
    {
      loader: "sass-resources-loader",
      options: {
        resources: path.resolve(__dirname, "../../src/client/style/global.scss")
      }
    }
  ]
});

const vueScssDEV = ["vue-style-loader", cssLoader, sassLoader, sassResLoader];

// Vue loaders
const vueLoaders = {
  scss: "production" === process.env.NODE_ENV ? vueScssPROD : vueScssDEV,
  sass: ["vue-style-loader", cssLoader, sassLoader]
};

// Vue loader options
exports.vueLoaderOptions = {
  extractCSS: true,
  postcss: [require("postcss-cssnext")()],
  loaders: vueLoaders
};

// Scss loaders
exports.scssLoaders = [cssLoader, sassLoader];
