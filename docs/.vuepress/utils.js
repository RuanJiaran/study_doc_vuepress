const getFileName = rpath => {
  const fs = require('fs')
  // 排除检查的文件
  const excludes = ['.DS_Store']

  let filenames = []
  // let fileImg = /\.(png|jpe?g|gif|webp)(\?.*)?$/;
  let fileTypes = /\.md$/ //只匹配以md结尾的文件

  fs.readdirSync(rpath).forEach(file => {
    if (excludes.indexOf(file) < 0) {
      const fullpath = rpath + '/' + file
      var fileinfo = fs.statSync(fullpath)
      if (fileinfo.isFile()) {
        // if(file.indexOf('.md') > 0) {
        if (fileTypes.test(file)) {
          if (file === 'index.md') {
            file = ''
          } else {
            file = file.replace('.md', '')
          }
          filenames.push(file)
        }
      }
    }
  })
  filenames.sort() // 排序

  return filenames
}

const getSidebar = (title, children = [''], collapsable = true, sidebarDepth = 6) => {
  const arr = new Array()
  arr.push({
    title,
    children,
    collapsable,
    sidebarDepth,
  })

  return arr
}

module.exports = { getFileName, getSidebar }
