import express = require('express');
import bodyParser = require('body-parser');
import multer = require('multer'); 
var routes = require('./routes');
var path = require('path');

var app = express();
app.use(express.static('public'));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(multer().any()); // for parsing multipart/form-data
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.post('/table', routes.table);
app.use('/', routes.index);

/*app.get('/', (req, res) =>{
    res.send('Welcome to Upgrade Game!');
});

app.route('/user')
    .post((req, res)=>{
        console.log(req.body);
        res.json(req.body);
    });*/
    
var server = app.listen(3001, ()=>{
    var host = server.address().address;
    var port = server.address().port;
    
    console.log('This app listening at http://%s:%s', host, port);
});