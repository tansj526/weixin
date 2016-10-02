'use strict';
var express = require("express");
var app = express();
var config = require("../config");
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.route('/')
    .get(function(req, res) {
        console.log(req.query);
        res.render("layout",
            {
                page: 'login.ejs',
                title:"登录界面",
                msg:'欢迎光临',
                config: config
            }
        );
    })
    .post(function(req, res) {
        var data = req.body;
        if(data.userName == 'hello'){
            res.render("login",{title:"登录成功",msg:'欢迎光临'});
        }else{
            res.render("login",{title:"登录失败，请重试",msg:'欢迎光临'});
        }
    });

module.exports = app;