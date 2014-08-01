var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');
var countriesController = require('./controllers/countries.js')
var underscore = require('underscore');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));
app.get('/', indexController.index);

// route for listing all countries
app.get('/countries', countriesController.listAllCountries);

// route for searching for a country and filtering results
app.get('/search', countriesController.countriesSearch);

var server = app.listen(5656, function() {
	console.log('Express server listening on port ' + server.address().port);
});
