var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mongojs = require('mongojs');
var db = mongojs('Challenge6', ['quotes']);
var cmd = require('node-cmd');

var app = express();

/*
var logger = function(req, res, next){
	console.log('Logging...');
	next();
}

app.use(logger);
*/

// view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


//body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// set static path
app.use(express.static(path.join(__dirname, 'public')));



app.get('/', function(req, res){
	db.quotes.find(function(err, docs){
		console.log(docs);
	
		res.render('index', {
			quotes: docs
		});
	})
});

app.post('/scraper', function(req, res){
	console.log('form submitted');
	// cmd.run('scrapy crawl quotes');
	cmd.get(
		'scrapy crawl quotes',
		function(err, data, stderr){
			console.log(data);
		}
	);
});

app.post('/clear', function(req, res){
	console.log('mongo cleared');
	db.quotes.drop(function(err, docs){
		console.log(docs);
	});
});

app.listen(8000, function(){
	console.log('Server started on Port 8000...');
})










