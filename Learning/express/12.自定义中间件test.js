const express = require('express')
const app = express()
const bodyParser = require('./custom-body-parser')

// 定义中间件
app.use(bodyParser)

// 定义路由
app.post('/user', (req, res) => {
    res.send(req.body)
})

// 启动服务器
app.listen(80, () => {

})