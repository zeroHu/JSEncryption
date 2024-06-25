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
