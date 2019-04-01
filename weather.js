
function getAPIweather() {

	fetch('https://api.openweathermap.org/data/2.5/weather?appid=b0c8dafa512a0134e90df6ece3c2b7a2&q=the%20Hague,nl&units=metric').then(function(response) {
		return response.json();
	})
 	.then(function(response) {
 		console.log(response.main.temp);

		//afronden op hele cijfers
		var temp = Math.round(response.main.temp, 0);

		if(temp <=10){
			//show temp
			document.getElementById('weather').innerHTML = temp + ' °C ';
			//show message
			document.getElementById('message').innerHTML = "It is cold outside"+", "+"enjoy this image while landing";
			//show dog picture
			showDogPicture();
		}
		else {
			//show temp
			document.getElementById('weather').innerHTML = temp + ' °C ';
			//show message
			document.getElementById('message').innerHTML = "The weather is pleasant"+", "+"enjoy this image while landing";
			//show cat picture
			showCatPicture();
		}

 	})
	.catch(function (error) {
	 	console.log('Request failed', error);
	});

}
//aanroepen weather api
getAPIweather();
