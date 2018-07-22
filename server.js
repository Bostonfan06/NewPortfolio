var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");

//PORT NUMBER
var PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));

//Routes to all pages
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/index.html'))
});

app.get('/home', function(req, res){
    res.sendFile(path.join(__dirname + '/landing.html'))
});

app.get('/work', function(req, res){
    res.sendFile(path.join(__dirname + '/work.html'))
});

app.get('/about', function(req, res){
    res.sendFile(path.join(__dirname + '/about.html'))
});

app.get('/contact', function(req, res){
    res.sendFile(path.join(__dirname + '/contact.html'))
});

require('./routes/html-routes.js')(app)

app.listen(PORT, function(){
    console.log("Listening on PORT: " +  PORT)
})