const inquirer = require('inquirer')
const downloadFunc = require('./download')
const globalData = require('../../config/global.data')

const createAction = async (project, args) => { // 命令行执行逻辑代码
  console.log(project, args)
  const answer = await inquirer.prompt([
    {
      type: 'list',
      name: 'framework',
      choices: globalData.framework,
      message: 'select which one you want to use'
    }
  ])
  // 下载代码模板
  downloadFunc(globalData.frameworkGitUrl[answer.framework], project)
}

module.exports = {
  createAction
}