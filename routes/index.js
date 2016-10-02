'use strict';
var express = require("express");
var config = require("../config");
var app = express();

app.get("/",function(req,res) {
    res.render("layout",
        {
            title:"test",
            page: 'index.ejs',
            data:{
                supplies:['222','333','444'],
                header:"header.ejs"
            },
            config: config
        }
    );
});

module.exports = app;