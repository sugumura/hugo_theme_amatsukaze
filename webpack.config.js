module.exports = {
  mode: process.env.NODE_ENV || "development",
  entry: { "main.js": ["./static/src/main.js"] },
  output: {
    path: __dirname + "/static/js",
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
