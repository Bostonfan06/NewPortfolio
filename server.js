var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");

//PORT NUMBER
var PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/css'))
app.use(express.static(__dirname + '/images'))

//Routes to all pages
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/index.html'))
});

app.get('/home', function(req, res){
    res.sendFile(path.join(__dirname + '/public/' + '/landing.html'))
});

app.get('/work', function(req, res){
    res.sendFile(__dirname + '/public/' + '/work.html')
});

app.get('/about', function(req, res){
    res.sendFile(path.join(__dirname + '/public/' + '/about.html'))
});

app.get('/contact', function(req, res){
    res.sendFile(path.join(__dirname + '/public/' + '/contact.html'))
});

require('./routes/html-routes.js')(app)

app.listen(PORT, function(){
    console.log("Listening on PORT: " +  PORT)
})