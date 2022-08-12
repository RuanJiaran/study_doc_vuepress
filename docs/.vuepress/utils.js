const rootpath = require('path').resolve(__dirname, '..') //执行一次dirname将目录定位到docs目录
const fs = require('fs')

const getFileName = path => {
  const rpath = rootpath + '/' + path

  // 排除检查的文件
  const excludes = ['.DS_Store']

  let filenames = []
  // let fileImg = /\.(png|jpe?g|gif|webp)(\?.*)?$/;
  let fileTypes = /\.md$/ //只匹配以md结尾的文件

  fs.readdirSync(rpath).forEach(file => {
    if (excludes.indexOf(file) < 0) {
      const fullpath = rpath + '/' + file
      const fileinfo = fs.statSync(fullpath)

      if (fileinfo.isFile()) {
        if (fileTypes.test(file)) {
          if (file === 'index.md') {
            file = ''
          } else {
            file = file.replace('.md', '')
          }
          filenames.push(path + '/' + file)
        }
      }
    }
  })
  filenames.sort() // 排序

  return filenames
}

const getSidebar = (title, children = [], collapsible = false) => {
  return {
    text: title,
    children,
    collapsible,
  }
}

module.exports = { rootpath, getFileName, getSidebar }
