const mysql = require('mysql');

const db = mysql.createPool({
    host: 'j-mysql-team.cqg6wzvrxiua.ap-northeast-2.rds.amazonaws.com',
    port: '3306',
    user: 'admin',
    password: '20220606',
    database: 'crawling'
});

module.exports = db;