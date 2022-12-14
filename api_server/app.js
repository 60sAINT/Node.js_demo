// 导入express
const express = require('express')
// 创建服务器的实例对象
const app = express()

// 导入并配置cors中间件
const cors = require('cors')
app.use(cors())

// 配置解析表单数据的中间件。注意：这个中间件，只能解析application/x-www-form-urlencoded格式的表单数据
app.use(express.urlencoded({extended: false}))

// 一定要在路由之前，封装res.cc函数
app.use((req, res, next) => {
    // status默认值为1，表示失败的情况
    // err的值，可能是一个错误对象，也可能是一个错误的描述字符串
    res.cc = function(err, status = 1) {// 如果没有传第二个参数，那么默认第二个参数status等于1
        res.send({
            status,
            message: err instanceof Error ? err.message : err,
        })
    }
    next()
})

// 导入并使用路由模块
const userRouter = require('./router/user')
app.use('/api', userRouter)
const Joi = require('joi')

// 定义错误级别的中间件
app.use((err, req, res, next) => {
    // 验证失败导致的错误
    if(err instanceof Joi.ValidationError) {
        return res.cc(err)
    }
    // 未知的错误
    res.cc(err)
})

// 启动服务器
app.listen(3007, () => {
    console.log('api server running at http://127.0.0.1:3007')
})