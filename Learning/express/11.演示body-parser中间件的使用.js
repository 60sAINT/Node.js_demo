// 导入express模块
const express = require('express')
// 创建express的服务器实例
const app = express()

// 1.导入解析表单数据的中间件body-parser
const parser = require('body-parser')
// 2.使用app.use来注册中间件
app.use(parser.urlencoded({extended: false}))

app.post('/user', (req, res) => {
    // 如果没有配置任何解析表单数据的中间件，则req.body默认等于undefined
    console.log(req.body)
    res.send('ok')
})

app.listen(80, () => {
    
})