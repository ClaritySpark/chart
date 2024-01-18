const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "clearly-log.js",
    path: path.resolve(__dirname, "dist"),
    library: "LoggingSDK",
    libraryTarget: "umd",
    globalObject: "this",
  },
};
