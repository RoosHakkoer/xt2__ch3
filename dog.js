
function showDogPicture() {

	fetch('https://dog.ceo/api/breeds/image/random').then(function(response) {
		return response.json();
	})
 	.then(function(response) {
	 	console.log(response.message);

		var image = response.message;

		document.getElementById('image').src = image;

 	})
	.catch(function (error) {
		console.log('Request failed', error);
	});
}
//aanroepen in weather.js
