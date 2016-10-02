'use strict';
var express = require("express");
var app = express();
var path = require("path");
var favicon = require('serve-favicon');

var index = require('./routes/index');
app.use('/', index);


var login = require('./routes/login');
app.use('/login', login);


// 设定views变量，意为视图存放的目录
app.set('views', path.join(__dirname, 'views'));


// 设定view engine变量，意为网页模板引擎
app.set("view engine","ejs");


//设定静态文件目录
app.use(express.static(path.join(__dirname, 'resources')));
app.use(favicon(path.join(__dirname, 'resources','images','favicon.ico')));

app.get('*', function(req, res){
 res.render("404", {title:"一不小心走丢了啊啊"});
 });

module.exports = app;