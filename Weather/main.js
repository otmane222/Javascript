const apiKey = "da36e6b8af17694f0fd72e962a735c3d"
const weatherIcon = document.getElementById("weatherIcon");


let search = document.getElementById('search');
let button = document.getElementById('searchIcon');

if (search.value == "") {
	search.value = "casablanca";
}

let apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&appid=" + apiKey + "&q=";
search.value = "";

checkWeather();

async function checkWeather(city) {

	const	response = await fetch(apiUrl + city);
	var		data = await response.json();
	
	
	console.log(data);
	
	document.querySelector(".city").innerHTML = data.name;
	document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
	document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
	document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

	if (data.weather[0].main == "Clear") {
		weatherIcon.src = "images/clear.png";
	}
	else if (data.weather[0].main == "Clouds") {
		weatherIcon.src = "images/clouds.png";
	}
	else if (data.weather[0].main == "Rain") {
		weatherIcon.src = "images/rain.png";
	}
	else if (data.weather[0].main == "Drizzle") {
		weatherIcon.src = "images/drizzle.png";
	} else if (data.weather[0].main == "Mist") {
		weatherIcon.src = "images/Mist.png";
	}
	else if (data.weather[0].main == "Snow") {
		weatherIcon.src = "images/snow.png";
	}
	else {
		weatherIcon.src = "images/sun.png";
	
	}
}
search.addEventListener('keypress', function(e){
	if (e.key == "Enter") {
		if (search.value == "") {
			search.value = city;
		}
		checkWeather(search.value);
		search.value = "";
	}
});
button.addEventListener('click', function(){
	if (search.value == "") {
		search.value = city;
	}
	checkWeather(search.value);
	search.value = "";
});