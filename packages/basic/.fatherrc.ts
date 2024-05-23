import { defineConfig } from 'father';

const library = 'JandiasnowBasic';

const externals = {};

export default defineConfig({
  extends: '../../.fatherrc.base.ts',
  cjs: {
    input: 'src', // 默认编译目录
    platform: 'node', // 默认构建为 Node.js 环境的产物
    transformer: 'esbuild', // 默认使用 esbuild 以获得更快的构建速度
  },
  umd: {
    entry: {
      'src/index.ts': {
        name: library,
        sourcemap: true,
        externals,
      },
    },
  },
});
