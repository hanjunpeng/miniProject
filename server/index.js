const express = require('express');
const mysql = require('mysql');
const config = require('./config.js')
const bodyparser = require('body-parser');
const ejs = require('ejs');
const app = express();
const path = require('path');

let connection = mysql.createConnection({
  host: config.host,
  user: config.user,
  password: config.password,
  database: config.database
})

connection.connect();

// 跨域
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With")
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS")
  res.header("X-Powered-By", ' 3.2.1')
  if (req.method == "OPTIONS") res.send(200);/*让options请求快速返回 可要可不要*/
  else next();
})

// 中间件 解析请求体
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: false }))


// 引入路由分发
const admin = require('./routes')
app.use('/', admin);

app.get('/login', function (req, res) {
  res.json({
    code: 1,
    msg: '错误',
    data: [1,2,3]
  })
})

app.listen(8050, function () {
  console.log('服务启动成功')
})