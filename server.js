"use strict";

var express = require('express')
var bodyParser = require('body-parser')
var port = "9898"
var database = require('./server-assets/database')
var cors = require('cors');
var app = express();

app.use(express.static(__dirname + "/public"));

app.use(bodyParser.json());
app.use(cors());

app.get('/friends', function (req, res){
 	res.send(database.getFriends());

})

app.post('/friends/new', function(req, res){
	res.send(database.addFriends(req.body));
})








app.listen(port, function(){
	console.log("Listening on port " + port)
})