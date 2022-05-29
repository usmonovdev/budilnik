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

var sound = new Audio('alarm.mp3');
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