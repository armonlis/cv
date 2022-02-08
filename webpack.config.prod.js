const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "production",
  target: "web",
  entry: "/src/js/index.js",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "index.js"
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {from: "src/*.html", to: path.join(__dirname, "dist/[name].html")},
        {from: "src/css/style.css", to: path.join(__dirname, "dist/")},
        {from: "src/css/style.css.map", to: path.join(__dirname, "dist")}
      ]
    })
  ]
};