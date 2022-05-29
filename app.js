var clockIcon = document.getElementById('alarm');
var sunIcon = document.getElementById('sun');
var clockBox = document.getElementById('clockBox');
var alertBoxOne = document.getElementById('alertBox');

function sun() {
	clockBox.classList.toggle('shadow');
	sunIcon.classList.toggle('color');
};

function alarmOne() {
	alertBoxOne.classList.toggle('displayFlex');
	clockIcon.classList.toggle('color');
}

function power() {
	var center = document.getElementById('center');
	var right = document.getElementById('right');
	if (center.style.opacity === '0', right.style.opacity === '0') {
		center.style.opacity = '1';
		right.style.opacity = '1';
	} else {
		center.style.opacity = '0';
		right.style.opacity = '0';
	}
}

var sound = new Audio("alarm.mp3");
sound.loop = true;
var h1 = document.getElementById('clockText');

var currentTime = setInterval(function(){
	var date = new Date();
	var hours = (12 - (date.getHours()));
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();
    if (hours < 0) {
        hours = hours * -1;
    } else if (hours == 00) {
        hours = 12;
    } else {
        hours = hours;
    }
    h1.textContent = addZero(hours) + ":" + addZero(minutes) + ":" + addZero(seconds);
},1000);

function addZero(time) {
	return (time < 10) ? "0" + time : time;
}

var p = document.getElementById('ampmText');
var currentTime = setInterval(function(){
    var date1 = new Date();
    var hours1 = (12 - (date1.getHours()));
    var ampm = (date1.getHours()) < 12 ? 'AM' : 'PM';
        if (hours1 < 0) {
            hours1 = hours1 * -1;
        } else if (hours1 == 00) {
            hours1 = 12;
        } else {
            hours1 = hours1;
        }
        p.textContent = ampm;
},1000);

function hoursMenu(){
    var select = document.getElementById('alarmHour');
    var hrs = 12
    for (i=1; i <= hrs; i++) {
        select.options[select.options.length] = new Option( i < 10 ? "0" + i : i, i);
    }
}
hoursMenu();

function minMenu(){
    var select = document.getElementById('alarmMins');
    var min = 59;
    for (i=0; i <= min; i++) {
        select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
    }
}
minMenu();

function secMenu(){
    var select = document.getElementById('alarmSec');
    var sec = 59;
    for (i=0; i <= sec; i++) {
        select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
    }
}
secMenu();

function alarmSet() {
    var hr = document.getElementById('alarmHour');
    var min = document.getElementById('alarmMins');
    var sec = document.getElementById('alarmSec');
    var selectedHour = hr.options[hr.selectedIndex].value;
    var selectedMin = min.options[min.selectedIndex].value;
    var selectedSec = sec.options[sec.selectedIndex].value;
    var alarmTime = addZero(selectedHour) + ":" + addZero(selectedMin) + ":" + addZero(selectedSec);
    console.log('alarmTime:' + alarmTime);
    document.getElementById('alarmHour').disabled = true;
    document.getElementById('alarmMins').disabled = true;
    document.getElementById('alarmSec').disabled = true;
    document.getElementById('ampm').disabled = true;
    var h1 = document.getElementById('clockText');

    setInterval(function(){
        var date = new Date();
        var hours = (12 - (date.getHours()));
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        var ampm = (date.getHours()) < 12 ? 'AM' : 'PM';
        if (hours < 0) {
            hours = hours * -1;
        } else if (hours == 00) {
            hours = 12;
        } else {
            hours = hours;
        }
		
        var currentTime = h1.textContent = addZero(hours) + ":" + addZero(minutes) + ":" + addZero(seconds);
        if (alarmTime == currentTime) {
            sound.play();
        }
    },1000);
}

function alarmClear() {
    document.getElementById('alarmHour').disabled = false;
    document.getElementById('alarmMins').disabled = false;
    document.getElementById('alarmSec').disabled = false;
    document.getElementById('ampm').disabled = false;
    sound.pause();
}