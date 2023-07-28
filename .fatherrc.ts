// 配置参考 https://github.com/umijs/father/tree/father-build@1.18.2
export default {
  esm: {
    type: 'rollup',
    minify: true,
    // file: 'yl-design',
  },
  cjs: {
    type: 'rollup',
    minify: true,
    // file: 'yl-design',
  },
  // umd: {
  //   name: 'yld',
  //   minFile: true,
  // },
  extractCSS: true,
};
