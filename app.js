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