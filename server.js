var express = require("express");
var app = express();
var path = require("path");

//PORT NUMBER
var PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + "/public"))

//Routes to all pages
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + "/public/landing.html"))
});

app.get('/home', function(req, res){
    res.sendFile(path.join(__dirname + "/public/index.html"))
});

app.get('/work', function(req, res){
    res.sendFile(path.join(__dirname + "/public/work.html"))
});

app.get('/about', function(req, res){
    res.sendFile(path.join(__dirname + "/public/about.html"))
});

app.get('/contact', function(req, res){
    res.sendFile(path.join(__dirname + "/public/contact.html"))
});

app.listen(PORT, function(){
    console.log("Listening on PORT: " +  PORT)
})