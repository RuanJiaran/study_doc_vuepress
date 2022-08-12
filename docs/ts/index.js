const { getFileName, getSidebar } = require('../.vuepress/utils')

const routes = [getSidebar('ts', getFileName('/ts'))]

module.exports = routes
