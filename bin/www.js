#!/usr/bin/env node

var app = require('../app');
var open = require('open');
// 设定port变量，意为访问端口
var port = 3333;
app.set('port', process.env.PORT || port);

app.listen(app.get('port'));
/*var browserSync = require('browser-sync');
var config = {
    files: ["resources/!**!/!*.{js,css}", "routes/!*.js", "views/!**!/!*.ejs"],
    logLevel: 'debug',
    logSnippet: false,
    reloadDelay: 3000,
    reloadOnRestart: true,
    proxy: "http://localhost:" + app.get('port')
};
var bs = browserSync(config);
app.use(require('connect-browser-sync')(bs));*/

//open("http://localhost:" + app.get('port'));