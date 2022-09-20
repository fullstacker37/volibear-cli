const inquirer = require('inquirer')
const globalData = require('../../config/global.data')

const createAction = (project, args) => { // 命令行执行逻辑代码
  console.log(project, args)
  inquirer.prompt([
    {
      type: 'list',
      name: 'framework',
      choices: globalData.framework,
      message: 'select which one you want to use'
    }
  ]).then((answer) => {
    console.log(answer)
  })
}

module.exports = {
  createAction
}