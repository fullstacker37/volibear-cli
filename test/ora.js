const ora = require('ora')

const spinner = ora().start()

spinner.text = 'loading...'

setTimeout(() => {
  console.log('正在下载')
  spinner.succeed('结束')
}, 2000)