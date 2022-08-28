const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/main.ts",
  resolve: {
    extensions: ['.ts', '.js', '.json']
  },
  output: {
    path: path.resolve(__dirname, "public"),
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        exclude: [
          path.resolve(__dirname, "node_modules")
        ],
        // Actions:
        loader: "ts-loader",
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
      template: 'src/index.html'
    }),
  ],
<<<<<<< HEAD
}
=======
};
>>>>>>> 39770f9105ecff6a19b29694c1c91a943be36349
