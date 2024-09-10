const path = require('path');

module.exports = [
  {
    // ESM 构建配置
    entry: './utils.js', // 你的 utils.js 文件路径
    output: {
      path: path.resolve(__dirname, 'webpackDist'),
      filename: 'sjfwUtils.es.min.js', // ESM 输出文件
      library: {
        type: 'module', // 指定输出为 ES Module
      },
    },
    experiments: {
      outputModule: true, // 启用 ES Module 输出
    },
    // 指定 externals 以排除外部依赖
    externals: {},
    mode: 'production',
  },
  {
    // UMD 构建配置
    entry: './utils.js', // 你的 utils.js 文件路径
    output: {
      path: path.resolve(__dirname, 'webpackDist'),
      filename: 'sjfwUtils.umd.min.js', // UMD 输出文件
      library: 'sjfwUtils', // UMD 模块名称
      libraryTarget: 'umd', // 指定输出为 UMD
      globalObject: 'this', // 适用于 Node.js 和浏览器的环境
    },
    // 指定 externals 以排除外部依赖
    externals: {},
    mode: 'production',
  },
];
