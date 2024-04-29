const hour = document.querySelector('.hour');
const minute = document.querySelector('.min');
const second = document.querySelector('.sec');





setInterval(setTime, 1000);

function setTime() {
	const now = new Date();
	var seconds = now.getSeconds();
	var minutes = now.getMinutes();
	var hours = now.getHours();

	if (seconds < 10) seconds = '0' + seconds;
	if (minutes < 10) minutes = '0' + minutes;
	if (hours < 10) hours = '0' + hours;

	second.innerHTML = seconds;
	minute.innerHTML = minutes;
	hour.innerHTML = hours;

}
