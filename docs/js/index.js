const { rootpath, getFileName, getSidebar } = require('../.vuepress/utils')

const routes = [
  getSidebar('核心', getFileName('/js/core')),
  getSidebar('基础', getFileName('/js/base')),
  getSidebar('数组操作', getFileName('/js/array')),
  getSidebar('进阶', getFileName('/js/advanced')),
  getSidebar('实践', getFileName('/js/practice')),
]

module.exports = routes
