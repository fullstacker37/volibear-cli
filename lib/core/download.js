const download = require('download-git-repo')
const ora = require('ora')
const chalk = require('chalk')

const globalData = require('../../config/global.data')

const downloadFunc = (url, project) => {
  const spinner = ora().start()
  spinner.text = '代码正在下载中...'
  download(`direct:${url}`, project, { clone: true }, (error) => {
    if (!error) {
      spinner.succeed('代码下载成功')
      console.log(chalk.bold.blue('Run your project:'))
      console.log('cd ' + project)
      console.log('npm install')
      console.log('npm run dev')
    } else {
      spinner.fail('代码下载失败')
    }
  })
}

module.exports = downloadFunc