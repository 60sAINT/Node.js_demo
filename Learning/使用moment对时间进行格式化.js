// 导入包之前要先在终端安装包

// 1.导入需要的包
// 注意：导入的名称，就是装包的时候的名称
const moment = require('moment')

const dt = moment().format('YYYY-MM-DD HH:mm:ss')
console.log(dt)