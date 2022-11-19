const express =require('express')
const app = express()

// TODO_01：请配置Session中间件
const session = require('express-session')
app.use(session({
    secret: 'itheima',
    resave: false,
    saveUninitialized: true,
}))