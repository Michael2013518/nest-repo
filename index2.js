const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3360,
  user: 'root',
  password: 'root',
  database: 'practice'
})

/**
 * mysql操作
 *  查询：`SELECT * FROM customers where name like ?`, ['李%']
 *  插入：`INSERT INTO customers (name) VALUES (?),(?),(?)`, ['Michael', 'Lily', 'Tom']
 *  更新：`UPDATE customers SET name = 'TomLin' WHERE name = 'Tom'
 *  删除：`DELETE FROM customers WHERE name = 'Tom'`
 */
connection.execute(`DELETE FROM customers WHERE name = 'TomLin'`, (err, results) => {
  console.log(results)
  console.log(err)
  // console.log(fields.map(item => item.name))
})