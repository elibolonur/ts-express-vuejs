"use strict";
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/client/main.js",
    vendor: ["vue", "vuex", "vue-router", "vuex-router-sync"]
  },
  resolve: {
    extensions: ["*", ".js", ".vue", ".json"],
    alias: {
      vue: "vue/dist/vue.esm.js"
      // vue$: "vue/dist/vue.esm.js"
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
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
          use: [
            {
              loader: "css-loader",
              options: {
                sourceMap: true,
                importLoaders: 1
              }
            },
            {
              loader: "postcss-loader",
              options: {
                config: {
                  ctx: {
                    cssnano: { preset: "default" },
                    autoprefixer: {}
                  }
                }
              }
            },
            "sass-loader"
          ]
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
    })
  ]
};

// module.exports = {
//   entry: ["./src/client/main.js"],
//   output: {
//     filename: "bundle.js",
//     path: path.resolve(__dirname, "../../dist/client")
//   },
//   resolve: {
//     extensions: ["*", ".js", ".vue", ".json"],
//     alias: {
//       vue$: "vue/dist/vue.esm.js"
//     }
//   },
//   devServer: {
//     publicPath: "/",
//     contentBase: path.join(__dirname, "../../src/client"),
//     // contentBase: "../../dist/client/index.html",
//     // contentBase: "./src/client",
//     // contentBase: path.join(__dirname, "../../dist/client"),
//     hot: true,
//     // compress: true,
//     port: 8080
//   },
//   module: {
//     rules: [
//       // {
//       //   test: /\.js$/,
//       //   exclude: /node_modules/,
//       //   use: {
//       //     loader: "babel-loader"
//       //   }
//       // },
//       // {
//       //   test: /\.js$/,
//       //   exclude: /(node_modules|bower_components)/,
//       //   use: {
//       //     loader: "babel-loader",
//       //     options: {
//       //       presets: ["es2015", "stage-0"]
//       //     }
//       //   }
//       // },
//       {
//         test: /\.js$/,
//         loader: "babel-loader",
//         include: [resolve("src/client"), resolve("node_modules/webpack-dev-server/client")],
//         exclude: /node_modules/
//       },
//       {
//         test: /\.vue$/,
//         loader: "vue-loader"
//       },
//       {
//         test: /\.(png|jpg|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
//         use: [
//           {
//             loader: "file-loader",
//             options: { name: "[name].[ext]", context: "" }
//           }
//         ]
//       },
//       {
//         test: /\.scss$/,
//         exclude: /node_modules/,
//         use: ExtractTextPlugin.extract({
//           fallback: "style-loader",
//           use: [
//             {
//               loader: "css-loader",
//               options: {
//                 sourceMap: true,
//                 importLoaders: 1
//               }
//             },
//             {
//               loader: "postcss-loader",
//               options: {
//                 config: {
//                   ctx: {
//                     cssnano: { preset: "default" },
//                     autoprefixer: {}
//                   }
//                 }
//               }
//             },
//             "sass-loader"
//           ]
//         })
//       },
//       {
//         test: /\.(woff|woff2)$/,
//         use: [
//           {
//             loader: "file-loader",
//             options: { name: "[name].[ext]", context: "" }
//           }
//         ]
//       }
//     ]
//   }
// };
