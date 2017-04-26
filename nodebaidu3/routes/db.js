var express = require('express');
var router = express.Router();
var mysql = require('mysql');

//参数较多，使用数据连接池方式,保持连接状态
var connection = mysql.createPool({
	host:'localhost',
	port:8889,
	user:'root',
	password:'root',
	database:'baidunews'
});

module.exports = connection;