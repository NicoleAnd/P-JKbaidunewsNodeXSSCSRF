var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection = require("./db.js");
var xss = require('xss');
var moment = require('moment');


var cookieParser = require('cookie-parser')
var csrf = require('csurf')
var bodyParser = require('body-parser')
// setup route middlewares 
var csrfProtection = csrf({ cookie: true })
var parseForm = bodyParser.urlencoded({ extended: false })
 
// create express app 
var app = express()
/* 后台路由页面 */

// 获取所有新闻列表
router.get('/getnews',csrfProtection, function(req, res, next) {
	connection.query("SELECT * FROM news",function(err,rows){
		res.json(rows);
	});
});

// 确认更新
router.post('/update',csrfProtection,function(req,res){
	//var html = xss('<script>alert("xss");</script>');
	var newsid = req.body.id,
		newstype = req.body.newstype,
		newstitle = xss(req.body.newstitle),
		newsimg = xss(req.body.newsimg),
		// newstime = req.body.newstime,
		newstime = moment(req.body.newstime).format('YYYY-MM-DD HH:mm:ss'),
		newssrc = xss(req.body.newssrc);

	connection.query("UPDATE news SET newstitle=?,newstype=?,newsimg=?,newstime=?,newssrc=? WHERE id=?",[newstitle,newstype,newsimg,newstime,newssrc,newsid],function(err,rows){
		res.json(rows.changedRows);
	console.log(newstime);
	});
});

// 模态框取值
// 修改
router.get('/curnews',csrfProtection,function(req,res){
	var newsid = req.query.newsid;
	connection.query("SELECT * FROM news WHERE id=?",[newsid],function(err,rows){
		res.json(rows);
	});
});

// 删除
router.post('/delete',csrfProtection,function(req,res){
	var newsid = req.body.newsid;
	connection.query("DELETE FROM news WHERE news.id = ?",[newsid],function(err,result){
		res.json(result.affectedRows);
	});
});

//insert moment(k).format('YYYY-MM-DD')
router.post('/insert',csrfProtection,function(req,res){
	var newstype = req.body.newstype,
		newstitle = xss(req.body.newstitle),
		newsimg = xss(req.body.newsimg),
		newstime = moment(req.body.newstime).format('YYYY-MM-DD HH:mm:ss'),
		newssrc = xss(req.body.newssrc);
	connection.query("INSERT INTO news (newstitle,newstype,newsimg,newstime,newssrc) VALUES (?,?,?,?,?)",[newstitle,newstype,newsimg,newstime,newssrc],function(err,result){
		if(!err){
			res.json(result.insertId);
		}
	});
});



module.exports = router;
