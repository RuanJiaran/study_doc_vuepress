const { defaultTheme } = require('vuepress')
const { rootpath, getSidebar, getFileName } = require('./utils')
const { searchPlugin } = require('@vuepress/plugin-search')

const { tsRoutes, jsRoutes } = require('./routes')

module.exports = {
  lang: 'zh-CN',
  title: '学习笔记',
  description: '个人学习笔记',
  base: '/study',
  dest: './study',
  markdown: {
    headers: {
      level: [1, 2, 3, 4],
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
        text: 'Vue2',
        link: '/vue2/data.html',
        activeMatch: '^/vue2/',
      },
      {
        text: 'React',
        link: '/react/life.html',
        activeMatch: '^/react/',
      },
      {
        text: 'ReactAdmin',
        link: '/react-admin/index.html',
        activeMatch: '^/react-admin/',
      },
      {
        text: 'Html/Css',
        link: '/html-css/index.html',
        activeMatch: '^/html-css/',
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
    ],
    sidebarDepth: 6,
    sidebar: {
      '/ts/': [
        {
          text: '基础类型',
          collapsible: true,
          link: '/ts/base.md',
        },
        {
          text: '函数',
          collapsible: true,
          link: '/ts/function.md',
        },
      ],
      '/js/': [...jsRoutes],
      '/ts/': [...tsRoutes],
      '/vue2/': [getSidebar('vue2', getFileName('/vue2'))],
      '/react/': [getSidebar('react', getFileName('/react'))],
      '/react-admin/': [getSidebar('react-admin', getFileName('/react-admin'))],
      '/nestjs/': [getSidebar('nestjs', getFileName('/nestjs'))],
      '/http/': [],
      '/html-css/': [getSidebar('html-css', getFileName('/html-css'))],
      '/docker/': [getSidebar('docker', getFileName('/docker'))],
    },
  }),
}
