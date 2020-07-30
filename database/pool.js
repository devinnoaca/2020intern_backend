const mysql = require('mysql2/promise')

//const pool = mysql.createPool({
//  host: '10.19.247.204',
//  port: 3306,
//  user: 'jingoo',
//  password: '1234',
//  database: 'innoacca',
//  connectionLimit: 10
//})

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  connectionLimit: 10
})

module.exports = pool
