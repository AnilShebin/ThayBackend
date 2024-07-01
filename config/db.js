const mysql = require('mysql2/promise')

const mysqlPool = mysql.createPool({
  host: '35.192.87.120',
  user: 'root',
  password: 'F.vio4yb',
  database: 'thay',
})

module.exports=mysqlPool;