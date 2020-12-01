const webpack = require("webpack");
const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
// const { VueLoaderPlugin } = require("vue-loader")
const HtmlWebpackPlugin = require("html-webpack-plugin");

const entryPath = path.resolve(__dirname, "../src/index.js");
const indexHtmlPath = path.resolve(__dirname, "../index.html");
const srcPath = path.resolve(__dirname, "../src");
const componentsPath = path.resolve(__dirname, "../src/components");
const viewsPath = path.resolve(__dirname, "../src/views");
const utilsPath = path.resolve(__dirname, "../src/utils");
const studyPath = path.resolve(__dirname, "../src/study");

module.exports = {
  entry: entryPath,
  resolve: {
    extensions: [".js", ".vue"],
    modules: ["node_modules"],
    alias: {
      "@src": srcPath,
      "@components": componentsPath,
      "@views": viewsPath,
      "@utils": utilsPath,
      "@study": studyPath
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ["thread-loader", "vue-loader"]
      },
      {
        test: /\.js$/,
        use: ["thread-loader", "babel-loader?cacheDirectory"], // ?cacheDirectory: 缓存loader执行结果，提升打包速率
        exclude: /node_modules/,
        include: srcPath
      },
      {
        test: /\.md$/,
        use: [
          "thread-loader",
          "vue-loader",
          {
            loader: require.resolve("./custom-loader/markdown-loader")
          }
        ], // ?cacheDirectory: 缓存loader执行结果，提升打包速率
        exclude: /node_modules/,
        include: srcPath
      },
      // 处理图片
      {
        test: /\.(pgn|jpe?g|gif|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
              name: "assets/images/[name].[hash:7].[ext]"
            }
          }
        ]
      },
      // 处理字体文件
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 8192,
          name: "assets/fonts/[name].[hash:7].[ext]"
        }
      }
    ]
  },
  plugins: [
    // 解决vender后面的hash每次都改变
    new webpack.HashedModuleIdsPlugin(),

    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: indexHtmlPath
    })
  ]
};
