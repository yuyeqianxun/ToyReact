const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].[hash].js",
    chunkFilename: "js/[name].[chunkhash].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: [
              [
                "@babel/plugin-transform-react-jsx",
                { pragma: "ToyReact.createElement" },
              ],
            ],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, "public"),
    compress: false,
    port: 8080,
    hot: true,
  },
};
