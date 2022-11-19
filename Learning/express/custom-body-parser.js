// 导入处理querystring的Node.js内置模块
const qs = require('querystring')

const bodyParser = (req, res, next) => {
    // 定义变量，用来存储客户端发送过来的请求数据
    let str = ''
    // 监听req的data事件
    req.on('data', (chunk) => {
        // 拼接请求体数据，隐式转换为字符串
        str += chunk
    })

    // 监听req的end事件
    req.on('end', () => {
        // 调用qs.parse()方法，把查询字符串解析为对象
        const body = qs.parse(str)
        // 将解析出来的请求对象，挂载为req.body属性
        req.body = body
        // 最后，一定要用next()函数，执行后续的业务逻辑
        next()
    })
}

module.exports = bodyParser// 向外导出解析请求体数据的中间函数