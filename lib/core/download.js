const download = require('download-git-repo')
const globalData = require('../../config/global.data')

const downloadFunc = (url, project) => {
  download(`direct:${url}`, project, { clone: true }, (error) => {
    console.log('clone error: ', error)
  })
}

module.exports = downloadFunc