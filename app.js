//モジュール読み込み
var express = require('express');

//サーバー作成
var app = express();

//MiddleWare
app.use(express.static('client'));

app.listen(5555);
console.log('server running with port: 5555');
