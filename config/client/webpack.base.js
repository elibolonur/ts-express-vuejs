const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    "app": "./src/client/main.js"
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "../../dist/client")
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/client/index.html",
      inject: true
    })
  ],
  resolve: {
    extensions: ["*", ".js", ".vue", ".json"],
    alias: {
      vue$: "vue/dist/vue.esm.js"
    }
  },
  devServer: {
    contentBase: "./src/client",
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
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
  }
};
