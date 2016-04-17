/// <reference path="typings/express/express.d.ts"/>
/// <reference path="typings/node/node.d.ts"/>

import express = require('express');
var app = express();

app.get('/', (req, res) =>{
    res.send('Hello World!');
});

var server = app.listen(3001, ()=>{
    var host = server.address().address;
    var port = server.address().port;
    
    console.log('This app listening at http://%s:%s', host, port);
});