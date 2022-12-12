const { getFileName, getSidebar } = require('../.vuepress/utils');

const routes = [
  getSidebar('开始', getFileName('/go/start')),
  getSidebar('基础', getFileName('/go/base')),
  getSidebar('进阶', getFileName('/go/advanced')),
];

module.exports = routes;
