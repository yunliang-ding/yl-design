import { defineConfig } from 'dumi';

export default defineConfig({
  mode: 'site',
  title: 'yl-design',
  outputPath: 'docs-dist',
  locales: [['zh-CN', '中文']],
  metas: [
    {
      name: 'keywords',
      content: 'yl-designer, react-component',
    },
    {
      name: 'description',
      content: '前端基础组件',
    },
  ],
  styles: [
    `
    .__dumi-default-dark{
      display: none !important;
    }
    .__dumi-default-previewer-desc > a{
      font-size: 12px !important;
    }
    .__dumi-default-menu-list
      > li
      > a {
        font-size: 14px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .__dumi-default-menu-list
      > a
      > span {
        font-size: 13px;
      }
  `,
  ],
  theme: {
    '@primary-background-color': '#f0f6ff',
    '@text-color': '#6a6a6a',
    '@font-size-base': '12px',
    '@font-size-small': '12px',
    '@primary-color': '#2f54eb',
  },
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'lib',
        style: true,
      },
      'antd',
    ],
  ],
  history: { type: 'hash' },
  hash: false,
  navs: [
    null, // null 值代表保留约定式生成的导航，只做增量配置
    {
      title: 'GitHub',
      path: 'https://github.com/yunliang-ding/yl-design',
    },
  ],
  apiParser: {
    // 自定义属性过滤配置，也可以是一个函数，用法参考：https://github.com/styleguidist/react-docgen-typescript/#propfilter
    propFilter: {
      // 是否忽略从 node_modules 继承的属性，默认值为 false
      skipNodeModules: true,
      // 需要忽略的属性名列表，默认为空数组
      skipPropsWithName: [],
      // 是否忽略没有文档说明的属性，默认值为 false
      skipPropsWithoutDoc: true,
    },
  },
  chainWebpack(config, { webpack }) {},
  // more config: https://d.umijs.org/config
});
