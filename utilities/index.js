/************************************************************

	BeatBucket™ Development Server
	Company: BeatBucket™ Ltd
	Author: Patrik Forsberg
    www.beatbucket.com

 ***********************************************************/ 
'use strict';

var serverPort = 8080;

var express = require('express');
var app = express();

var dbName = 'beatbucket';
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/' + dbName);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log('Mongo is connected');

});



/*/ Set the EJS template engine, for now... Snatch soooon :)
app.set('view engine', 'ejs'); 
app.set('views', './');

app.use(express.static('./'));

var router = express.Router();

app.get('/', function(req, res) {
    res.render('index');
});
*/

// app.listen(serverPort);