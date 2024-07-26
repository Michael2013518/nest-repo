const mysql = require('mysql2/promise');

(async function () {
  const pool = mysql.createPool({
    host: 'localhost',
    port: 3360,
    user: 'root',
    password: 'root',
    database: 'practice',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    maxIdle: 10,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0
  })

  const [result, fields] = await pool.query('SELECT * FROM customers');

  console.log(result)
  console.log(fields.map(item => item.name))
})()
