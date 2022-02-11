const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "production",
  target: "web",
  entry: {
    index: "/src/js/index.js",
    startLoader: "/src/js/startLoader.js"
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js"
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