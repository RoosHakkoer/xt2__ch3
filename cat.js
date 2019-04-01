
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
//aanroepen in weather.js
