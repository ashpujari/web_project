var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

require('./Model/plant');


mongoose.connect('mongodb://localhost:27017/web_project',{useUnifiedTopology:true}, {useNewUrlParser:true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function(){
    console.log("We are connected on mongoose!");
});


var plant_controller = require('./Controller/plant_controller');
app.get('/',  function(req, res){
    res.render('index.ejs');
})
app.get('/add', function(req, res){
    res.render('add_plant.ejs');
})

var server = app.listen(8080, function() {
	var port = server.address().port
	console.log("Server is listening on: http://localhost:%s", port)
})

