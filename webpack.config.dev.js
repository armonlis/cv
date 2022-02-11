const CopyWebpackPlugin = require("copy-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  target: "web",
  entry: {
    index: "/src/js/index.js",
    startLoader: "/src/js/startLoader.js"
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js"
  },
  devServer: {
    watchFiles: ["./src/*.html", "./src/js/*.js", "./src/css/*.css" ],
    port: 3000,
    open: false,
    hot: true
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {from: "./src/*.html", to: path.join(__dirname, "dist/[name].html")},
        {from: "./src/css/style.css", to: path.join(__dirname, "dist")},
        {from: "./src/css/style.css.map", to: path.join(__dirname, "dist")},
        {from: "./src/img", to: path.join(__dirname, "dist/img")}
      ]
    })
  ]
};