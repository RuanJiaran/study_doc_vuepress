const { defaultTheme } = require('vuepress')
const { getSidebar, getFileName } = require('./utils')
const { searchPlugin } = require('@vuepress/plugin-search')
const path = require('path')
const rootpath = path.resolve(__dirname, '..') //执行一次dirname将目录定位到docs目录

module.exports = {
  lang: 'zh-CN',
  title: '学习笔记',
  description: '个人学习笔记',
  base: '/study/',
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
        link: '/js/eventloop.html',
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
      '/js/': [...getSidebar('js', getFileName(rootpath + '/js/'), false)],
      '/ts/': [...getSidebar('ts', getFileName(rootpath + '/ts/'), false)],
      '/vue2/': [...getSidebar('vue2', getFileName(rootpath + '/vue2/'), false)],
      '/react/': [...getSidebar('react', getFileName(rootpath + '/react/'), false)],
      '/react-admin/': [...getSidebar('react-admin', getFileName(rootpath + '/react-admin/'), false)],
      '/nestjs/': [...getSidebar('nestjs', getFileName(rootpath + '/nestjs/'), false)],
      '/http/': [...getSidebar('http', getFileName(rootpath + '/http/'), false)],
      '/html-css/': [...getSidebar('html-css', getFileName(rootpath + '/html-css/'), false)],
      '/docker/': [...getSidebar('docker', getFileName(rootpath + '/docker/'), false)],
    },
  }),
}
