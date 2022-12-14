const { defaultTheme } = require('vuepress');
const { rootpath, getSidebar, getFileName } = require('./utils');
const { searchPlugin } = require('@vuepress/plugin-search');

const { tsRoutes, jsRoutes, nestjsRoutes, reactRoutes, vue2Routes, goRoutes } = require('./routes');

module.exports = {
  lang: 'zh-CN',
  title: '学习笔记',
  description: '个人学习笔记',
  base: '/study_doc_vuepress', //项目根路径
  dest: './dist', // 项目打包目录
  markdown: {
    headers: {
      level: [1, 2, 3, 4, 5],
    },
  },
  plugins: [
    searchPlugin({
      locales: {
        '/': {
          placeholder: 'Search',
        },
      },
      maxSuggestions: 20,
      isSearchable: (page) => page.path !== '/', // 排除首页不在搜索索引里面
    }),
  ],
  theme: defaultTheme({
    navbar: [
      {
        text: 'GO',
        children: [
          {
            text: '学习笔记',
            link: '/go/start/index.html',
          },
          {
            text: '其它文档',
            children: [
              {
                text: '菜鸟教程',
                link: 'https://www.runoob.com/go/go-tutorial.html',
              },
            ],
          },
        ],
      },
      {
        text: 'TypeScript',
        link: '/ts/as.html',
        activeMatch: '^/ts/',
      },
      {
        text: 'JavaScript',
        link: '/js/core/eventloop.html',
        activeMatch: '^/js/',
      },
      {
        text: 'Html/Css',
        link: '/html-css/index.html',
        activeMatch: '^/html-css/',
      },
      {
        text: 'React',
        link: '/react/base/life.html',
        activeMatch: '^/react/',
      },
      {
        text: 'Vue2',
        link: '/vue2/core/data.html',
        activeMatch: '^/vue2/',
      },
      {
        text: 'Webpack',
        link: '/webpack/webpack4-vue2.html',
        activeMatch: '^/webpack/',
      },
      {
        text: 'Nest 框架',
        link: '/nestjs/start/start.html',
        activeMatch: '^/nestjs/',
      },
      {
        text: 'Docker',
        link: '/docker/index.html',
        activeMatch: '^/docker/',
      },
      {
        text: 'Http',
        link: '/http/http-https.html',
        activeMatch: '^/http/',
      },
      {
        text: 'ReactAdmin',
        link: '/react-admin/index.html',
        activeMatch: '^/react-admin/',
      },
      {
        text: '其它',
        link: '/other/nginx_proxy.html',
        activeMatch: '^/other/',
      },
      {
        text: '常用文档',
        children: [
          {
            text: 'JS',
            children: [
              {
                text: 'ES6 学习文档',
                link: 'http://caibaojian.com/es6/README_about.html',
              },
              {
                text: 'lodash',
                link: 'https://www.lodashjs.com/',
              },
            ],
          },
          {
            text: 'Vue',
            children: [
              {
                text: 'Vue 官方文档',
                link: 'https://cn.vuejs.org/',
              },
              {
                text: 'Element UI',
                link: 'https://element.eleme.cn/#/zh-CN/component/installation',
              },
              {
                text: 'VuePress',
                link: 'https://v2.vuepress.vuejs.org/zh/',
              },
            ],
          },
          {
            text: 'React',
            children: [
              {
                text: 'React 官方文档',
                link: 'https://zh-hans.reactjs.org/',
              },
              {
                text: 'Create React App 中文文档',
                link: 'https://www.html.cn/create-react-app/',
              },
              {
                text: 'Ant Design',
                link: 'https://ant.design/components/overview-cn/',
              },
              {
                text: 'duim',
                link: 'https://d.umijs.org/zh-CN/guide',
              },
              {
                text: 'ahooks',
                link: 'https://ahooks.js.org/',
              },
              {
                text: 'react-dom-router',
                link: 'https://reactrouter.com/en/main',
              },
            ],
          },
          {
            text: 'Node',
            children: [
              { text: 'Sequelize 操作数据库', link: 'https://www.sequelize.com.cn/' },
              {
                text: 'Nest 框架官方文档',
                link: 'https://docs.nestjs.cn/9/introduction',
              },
              {
                text: 'Nest 框架模型生成器',
                link: 'https://www.npmjs.com/package/sequelize-typescript-generator',
              },
            ],
          },
          {
            text: '前端工程化',
            children: [
              {
                text: 'Webpack',
                link: 'https://webpack.docschina.org/concepts/',
              },
              {
                text: 'Babel',
                link: 'https://www.babeljs.cn/docs/',
              },
              {
                text: 'Prettier',
                link: 'https://www.prettier.cn/docs/index.html',
              },
              {
                text: 'Eslint',
                link: 'https://eslint.bootcss.com/',
              },
              {
                text: 'Stylelint',
                link: 'https://stylelint.io/',
              },
            ],
          },
        ],
      },
    ],
    sidebarDepth: 2,
    sidebar: {
      '/go/': [...goRoutes],
      '/js/': [...jsRoutes],
      '/ts/': [...tsRoutes],
      '/vue2/': [...vue2Routes],
      '/react/': [...reactRoutes],
      '/webpack/': [getSidebar('Webpack', getFileName('/webpack'))],
      '/react-admin/': [getSidebar('ReactAdmin', getFileName('/react-admin'))],
      '/nestjs/': [...nestjsRoutes],
      '/http/': [getSidebar('HTTP', getFileName('/http'))],
      '/html-css/': [getSidebar('HTML-CSS', getFileName('/html-css'))],
      '/docker/': [getSidebar('Docker', getFileName('/docker'))],
      '/other/': [getSidebar('其它', getFileName('/other'))],
    },
  }),
};
