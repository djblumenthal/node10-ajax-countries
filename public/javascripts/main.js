// console.log('Test');

$(function(){
	$('#button-load-countries').on('click', function(){
		$.get('/countries', function(data){
			data.map(function(n){
				var countryLi = $('<li>').text(JSON.stringify(n));
				$('#countries-list').append(countryLi);
			});

		});
	});
});
