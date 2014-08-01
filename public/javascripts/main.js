$(function(){
	// handler for rendering the full country list
	$('#button-load-countries').on('click', function(){
		$.get('/countries', function(data){
			$('#countries-list').empty();
			data.map(function(n){
				var countryLi = $('<li>').text(JSON.stringify(n));
				$('#countries-list').append(countryLi);
			});

		});
	});

	// handler for searching list of countries
	$('#search-button').on('click', function(){
		$.get('/search', { userCountrySearch: $('#search-input').val()}, function(data){
			$('#countries-list').empty();
			data.map(function(n){
				var countryLi = $('<li>').text(JSON.stringify(n));
				$('#countries-list').append(countryLi);
			});

		})
	})
});
