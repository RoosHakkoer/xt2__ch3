
function showCatPicture() {

	fetch(' https://api.thecatapi.com/v1/images/search').then(function(response) {
		return response.json();
	})
 	.then(function(response) {
	 	console.log(response[0].url);

		var image = response[0].url;

		document.getElementById('image').src = image;

 	})
	.catch(function (error) {
		console.log('Request failed', error);
	});

}







// construct request
// var request = 'http://api.openweathermap.org/data/2.5/weather?appid=b0c8dafa512a0134e90df6ece3c2b7a2&q=the%20Hague,nl';

// // get current weather
// fetch(request)

// // parse response to JSON format
// .then(function(response) {
// 	return response.json();
// })

// // do something with response
// .then(function(response) {
// 	// show full JSON object
// 	console.log(response);
// 	//document.getElementById('weather').innerHTML = response.weather[0].description;
// })
// // catch error
// .catch(function (error) {
// 	console.log('Request failed', error);
// });



/*
	var url = "http://api.openweathermap.org/data/2.5/weather";
	var apiKey ="b0c8dafa512a0134e90df6ece3c2b7a2";
	var city = "the%20Hague,nl";

	// construct request
	var request = url + "?" + "appid=" + apiKey + "&" + "q=" + city;
	fetch(request)
*/
