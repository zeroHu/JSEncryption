const path = require('path');

module.exports = {
  mode: 'production', // 或者 'development'，取决于你的需求
  entry: './utils.js',
  output: {
    path: path.resolve(__dirname, 'utilsBuild'),
    filename: 'sjfwUtils.min.js',
    library: 'sjfwUtils', // 这里可以根据需要修改导出的全局变量名
    libraryTarget: 'umd', // 允许在 CommonJS, AMD 等环境下使用
    globalObject: 'this', // 兼容 node 和浏览器
  },
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
