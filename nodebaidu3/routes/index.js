var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection=require("./db.js");

var moment = require('moment');

var cookieParser = require('cookie-parser')
var csrf = require('csurf')
var bodyParser = require('body-parser')
// setup route middlewares 
var csrfProtection = csrf({ cookie: true })
var parseForm = bodyParser.urlencoded({ extended: false })
 
// create express app 
var app = express()
/* 在主页获取新闻时的请求 */
router.get('/',csrfProtection, function(req, res, next) {
  var newstype = req.query.newstype;

  // 查询语句
  connection.query("SELECT * FROM news WHERE newstype = ?",[newstype],function(err,rows,fields){
  	//console.log(rows);
  	res.json(rows);
  });

});

module.exports = router;
