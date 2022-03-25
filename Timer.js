const timer = document.querySelector('#timer'),
playBtn = document.querySelector('.play-btn'),
resetBtn = document.querySelector('.reset-btn');
let icon = document.querySelector('.timer-controls i');
let secCircle = document.querySelector('.sec-circle');

let hr = 0;
let min = 0;
let sec = 0;

let stoptime = true;
playBtn.addEventListener('click', playpauseTimer);
resetBtn.addEventListener('click', resetTimer);

function playpauseTimer() {
	if (stoptime == true) {
		stoptime = false;
		timeCycle();
		icon.setAttribute("class", "fi-sr-pause");
		playBtn.innerHTML = '&parallel;';
	}
	else{
		stoptime = true;
		icon.setAttribute("class", "fi-sr-play");
		playBtn.innerHTML = '&gt;';
	}
}

function resetTimer() {
	timer.innerHTML = "00:00:00";
	playBtn.innerHTML = '&gt;';
	stoptime = true;
	hr = 0;
	min = 0;
	sec = 0;
}

setInterval(function() {
	secCircle.style.transform = `rotate(${6*sec}deg)`
}, 1000);

function timeCycle() {
	if (stoptime == false) {
		sec = parseInt(sec);
		min = parseInt(min);
		hr = parseInt(hr);
		sec = sec + 1;
		if (sec == 60) {
			min = min + 1;
			sec = 0;
		}
		if (min == 60) {
			hr = hr + 1;
			min = 0;
			sec = 0;
		}

		if (sec < 10 || sec == 0) {
			sec = '0' + sec;
		}
		if (min < 10 || min == 0) {
			min = '0' + min;
		}
		if (hr < 10 || hr == 0) {
			hr = '0' + hr;
		}

		timer.innerHTML = hr + ':' + min + ':' + sec;
		setTimeout("timeCycle()", 1000);
	}
}