const lodash = require('lodash');

const { getFileName, getSidebar } = require('../.vuepress/utils');

const routes = [
  getSidebar(
    '开始',
    lodash.uniq([
      '/go/start/',
      '/go/start/env',
      '/go/start/go-module',
      '/go/start/import',
      '/go/start/defer',
      '/go/start/print',
      '/go/start/runtime',
      ...getFileName('/go/start'),
    ])
  ),
  getSidebar(
    '基础',
    lodash.uniq([
      '/go/base/data-base-type',
      '/go/base/var',
      '/go/base/string',
      '/go/base/const',
      '/go/base/map',
      '/go/base/struct',
      '/go/base/array',
      '/go/base/slice',
      ...getFileName('/go/base'),
    ])
  ),
  // getSidebar('进阶', getFileName('/go/advanced')),
];

module.exports = routes;
