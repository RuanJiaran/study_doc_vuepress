const { defaultTheme } = require('vuepress')
const { rootpath, getSidebar, getFileName } = require('./utils')
const { searchPlugin } = require('@vuepress/plugin-search')

const { tsRoutes, jsRoutes, nestjsRoutes, reactRoutes, vue2Routes } = require('./routes')

module.exports = {
  lang: 'zh-CN',
  title: '学习笔记',
  description: '个人学习笔记',
  base: '/study_doc_vuepress', //项目根路径
  dest: './dist', // 项目打包目录
  markdown: {
    headers: {
      level: [1, 2, 3],
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
      isSearchable: page => page.path !== '/', // 排除首页不在搜索索引里面
    }),
  ],
  theme: defaultTheme({
    navbar: [
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
        text: '常用文档',
        children: [
          {
            text: 'ES6 学习文档',
            link: 'http://caibaojian.com/es6/README_about.html',
          },
          {
            text: 'Vue',
            children: [
              {
                text: 'Vue 官方文档',
                link: 'https://cn.vuejs.org/',
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
        ],
      },
    ],
    sidebarDepth: 2,
    sidebar: {
      '/js/': [...jsRoutes],
      '/ts/': [...tsRoutes],
      '/vue2/': [...vue2Routes],
      '/react/': [...reactRoutes],
      '/react-admin/': [getSidebar('ReactAdmin', getFileName('/react-admin'))],
      '/nestjs/': [...nestjsRoutes],
      '/http/': [getSidebar('HTTP', getFileName('/http'))],
      '/html-css/': [getSidebar('HTML-CSS', getFileName('/html-css'))],
      '/docker/': [getSidebar('Docker', getFileName('/docker'))],
    },
  }),
}
