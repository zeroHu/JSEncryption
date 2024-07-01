/**
 * 执行本文件方式： npx webpack --config webpack.config.js
 * 本文件主要是将frontDemo/index.js 打包为 index.bundle.js 也就是让用babel编译import语法
 */
const path = require('path');
module.exports = {
  entry: './frontDemo/index.js',
  output: {
    filename: 'index.bundle.js',
    path: path.resolve(__dirname, 'frontDemo'),
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};
