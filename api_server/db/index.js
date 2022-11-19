mysql = require('mysql')

const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'aisha2003819',
    database: 'my_db_01',
})

module.exports = db