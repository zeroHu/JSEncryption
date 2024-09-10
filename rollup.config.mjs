import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: './utils.js', // 你的 utils.js 文件路径
  output: [
    {
      file: 'rollupDist/sjfwUtils.es.min.js', // ESM 输出路径
      format: 'es', // ES Module 格式
    },
    {
      file: 'rollupDist/sjfwUtils.umd.min.js', // UMD 输出路径
      format: 'umd', // UMD 格式
      name: 'sjfwUtils', // UMD 全局变量名称
      globals: {},
    },
  ],
  external: [], // 外部依赖模块，不打包进文件
  plugins: [
    resolve(), // 解析 node_modules 中的模块
    commonjs(), // 将 CommonJS 模块转换为 ES6
  ],
};
