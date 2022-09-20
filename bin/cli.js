#! /usr/bin/env node

const { program } = require('commander')

program.option('-f --framework <framework>', '设置框架')
program
  .command('create <project> [option]') // 注册命令
  .alias('crt') // 别名
  .description('创建项目') // 命令描述
  .action((project, args) => { // 命令行执行逻辑代码
    
    console.log(project, args)
  })

program.parse(process.argv)