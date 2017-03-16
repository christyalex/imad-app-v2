var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var counter=0;
app.get('/counter',function(req,res){
    counter=counter+1;
    res.send(counter.tostring());
    app.get('/article-two',function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});
