#! /usr/bin/env node

const { program } = require('commander')
// 添加help选项
const help = require('../lib/core/help')
help(program)
// 注册命令
const registerCommanders = require('../lib/core/commander')
registerCommanders(program)

program.parse(process.argv)