var express = require('express')
var app = express();
var path = require('path');

//Routes to all HTML
module.exports = function (app) {

app.get('/', function(req, res){
res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/home', function(req, res){
res.sendFile(path.join(__dirname + '/landing.html'));
});

app.get('/work', function(req, res){
res.sendFile(path.join(__dirname + '/work.html'));
});

app.get('/about', function(req, res){
res.sendFile(path.join(__dirname + '/about.html'));
});

app.get('/contact', function(req, res){
res.sendFile(path.join(__dirname + '/contact.html'));
});
}