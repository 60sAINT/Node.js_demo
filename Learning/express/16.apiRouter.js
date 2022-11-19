// apiRouter.js【路由模块】
const express = require('express')
const router = express.Router()

// 在这里挂载对应路由
router.get('/get', (req, res) => {
    // 通过req.query获取客户端通过查询字符串，发送到服务器的数据
    const query = req.query
    // 调用res.send()方法，向客户端响应处理的结果
    res.send({
        status: 0,// 0表示处理成功，1表示处理失败
        msg: 'Get请求成功！',// 状态的描述
        data: query// 需要响应给客户端的数据
    })
})

// 定义POST接口
router.post('/post', (req, res) => {
    // 通过req.body获取请求体中包含的url-encoded格式的数据
    const body = req.body
    // 调用res.send()方法，向客户端响应处理的结果
    res.send({
        status: 0,// 0表示处理成功，1表示处理失败
        msg: 'POST请求成功！',// 状态的描述
        data: body// 需要响应给客户端的数据
    })
})

// 定义DELETE接口
router.delete('/delete', (req, res) => {
    res.send({
        status: 0,
        msg: 'DELETE请求成功',
    })
})

module.exports = router