const mysql = require('mysql2/promise')

const mysqlPool = mysql.createPool({
  host: '34.72.83.157',
  user: 'root',
  password: 'F.vio4yb',
  database: 'thay',
})

module.exports=mysqlPool;