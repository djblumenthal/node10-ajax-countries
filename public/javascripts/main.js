$(function(){
	// listen for user changes to check boxes
	

	// handler for rendering the full country list
	$('#button-load-countries').on('click', function(){
		$.get('/countries', function(data){
			$('#countries-list').empty();
			var countryCount = 0;
			data.map(function(n){
				// save index of current country in countryArray Index
				var countryArrayIndex = data.indexOf(n);
				var hasVisitedCheck = $('<input>').attr({
					'type': 'checkbox',
					'class': 'has-visited'
				});

				var countryLi = $('<li>').attr('data-countryArrayIndex', countryArrayIndex).text(JSON.stringify(n) + '  Has Visited: ').append(hasVisitedCheck);
				$('#countries-list').append(countryLi);

			});

		});
	});

	$('#countries-list').on('change', '.has-visited', function(){
		// test if has-visited checkbox is checked or unchecked
		var checkedStatus = $(this).prop('checked');
		var countryArrayIndex = $(this).closest('li').attr('data-countryArrayIndex');
		$.post('/hasVisited', {countryArrayIndex: +countryArrayIndex, hasVisited: checkedStatus}, function(data){
			console.log(data);
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
