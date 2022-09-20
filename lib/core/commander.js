const { createAction } = require('./action')

module.exports = function registerCommanders(program) {
  program
  .command('create <project> [option]') // 注册命令
  .alias('crt') // 别名
  .description('创建项目') // 命令描述
  .action(createAction)
}