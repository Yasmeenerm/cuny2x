// server.js
// load the things we need
var express = require('express');
var path = require('path')

//init app
var app = express();

//Load viewing engine
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'pug');


// home route
app.get('/', function(req, res){

  var data = {
    groceries: [{
    store: 'Acme',
    list: [
        'strawberries',
        'blueberries',
        'yogurt'
    ]
    }, {
    store: 'Corner Market',
    list: [
        'baguette',
        'basil',
        'tomatoes'
    ]
    }]
};

 	res.render('index',{
    data: data });
});


app.listen(8000);
console.log('8000 is the magic port');
