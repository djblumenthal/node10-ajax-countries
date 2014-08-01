var countries = require('../models/countries.json');
var underscore = require('underscore');

var countriesController = {
	// send full countries list to client
	listAllCountries: function(req, res){
		res.send(countries);
	},
	// filter countries list based on client search and send results back to client
	countriesSearch: function(req, res){

		var userCountrySearch = req.query.userCountrySearch;
		var countriesFound = [];
		for (var i =0; i<countries.length; i++){
			if (countries[i].name.toLowerCase().indexOf(userCountrySearch.toLowerCase()) > -1) {
				countriesFound.push(countries[i]);
			}
			
		};

		res.send(countriesFound);

	},
	// add or change has visited property for country object
	hasVisited: function(req, res){
		if (req.body.hasVisited) {
			countries[req.body.countryArrayIndex].hasVisited = true;
		}else {
			countries[req.body.countryArrayIndex].hasVisited = false;
		}res.send(countries[req.body.countryArrayIndex].hasVisited);
	}
};

module.exports = countriesController;