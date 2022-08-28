const path = require('path');
const { merge } = require('webpack-merge');
const webpackCommon = require('./webpack.config.common');

<<<<<<< HEAD
module.exports = merge(webpackCommon, {
  mode: 'development',
  devtool: "source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    open: true,
    compress: true,
    port: 3000,
  },
});
=======
module.exports = merge(commonConfig, {
  mode: 'production',
});
>>>>>>> 39770f9105ecff6a19b29694c1c91a943be36349
