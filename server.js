// var mysql = require("mysql"); // mysql 모듈을 불러옵니다.

// // 커넥션을 정의합니다.
// // RDS Console 에서 본인이 설정한 값을 입력해주세요.
// var connection = mysql.createConnection({
//   host: 'j-mysql-team.cqg6wzvrxiua.ap-northeast-2.rds.amazonaws.com',
//   user: 'admin',
//   port: '3306',
//   password: "20220606",
//   database: "crawling"
// });

// // RDS에 접속합니다.
// connection.connect(function(err) {
//   if (err) {
//     throw err; // 접속에 실패하면 에러를 throw 합니다.
//   } else {
//     // 접속시 쿼리를 보냅니다.
//     connection.query("SELECT * FROM tent_master", function(err, rows, fields) {
//     //   console.log(rows); // 결과를 출력합니다!
//       console.log(rows.id); // 결과를 출력합니다!
//     });
//   }
// });

const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const data = fs.readFileSync('../database.json');
const conf = JSON.parse(data);const mysql = require('mysql');
const connection = mysql.createConnection({    host: conf.host,    user: conf.user,    password: conf.password,    port: conf.port,    database: conf.database});
connection.connect();

app.get('/api/items', (req, res) => {    connection.query(        'SELECT * FROM tent_master',        (err, rows, fields) => {            res.send(rows);        }    )});

app.listen(port, () => console.log(`Listening on port ${port}`));