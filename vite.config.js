import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    outDir: 'viteDist', // 输出目录，可以根据需要更改
    lib: {
      entry: './utils.js', // 你的 util.js 文件路径
      name: 'sjfwUtils', // UMD 模块名称
      formats: ['es', 'umd'], // 输出的格式
      fileName: format => `sjfwUtils.${format}.min.js`, // 文件名
    },
    rollupOptions: {
      // 在这里配置 Rollup 特定的选项
      output: {
        globals: {
          // 如果你的 util.js 文件依赖于外部模块，在这里配置它们的 UMD 全局变量名称
        },
      },
    },
  },
});
