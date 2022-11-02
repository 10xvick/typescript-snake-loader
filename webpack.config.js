const path = require("path");
const keys = {
  mode: { production: "production", development: "development" },
};
module.exports = {
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.ts/,
        use: "ts-loader",
        include: [path.resolve(__dirname, "src")],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
  mode: keys.mode.development,
  resolve: {
    extensions: [".ts", ".js", ".json", ".css"],
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
};
