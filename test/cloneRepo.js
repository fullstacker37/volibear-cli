// https://www.npmjs.com/package/download-git-repo
const download = require('download-git-repo')

download('direct:git@gitee.com:beiyaoyaoyao/egg-template.git', './eggProject', { clone: true }, (error) => {
  console.log(error)
})