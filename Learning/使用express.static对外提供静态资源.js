const express = require('express')
const app = express()

// 在这里，调用express.static()方法，快速地对外提供静态资源
app.use('/files', express.static('./files'))
app.use(express.static('./fsAndPath'))

app.listen(80, () => {
    console.log('express server running at http://127.0.0.1')
})