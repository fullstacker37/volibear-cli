const inquirer = require('inquirer')

inquirer.prompt([
  {
    type: 'input',
    name: 'username', // key
    message: 'what\'s your name?'
  }
]).then((answer) => {
  console.log(answer)
})