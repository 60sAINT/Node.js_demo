const linnie = require('./linnie-tools')

// 格式化时间的功能
const dtStr = linnie.dateFormat(new Date())
console.log(dtStr)

const htmlStr = '<h1 title="abc">这是h1标签<span>123&nbsp;</span></h1>'
const str = linnie.htmlEscape(htmlStr);
console.log(str)

const str2 = linnie.htmlUnEscape(str);
console.log(str2);