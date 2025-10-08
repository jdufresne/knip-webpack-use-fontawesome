import path from "node:path";

export default {
  mode: "development",
  context: path.resolve(import.meta.dirname, "src"),
  entry: "./main.js",
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
};
