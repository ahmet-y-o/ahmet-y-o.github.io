
var currentTime = new Date();
var seconds, minutes, hours;
var secondsangle, minutesangle, hoursangle;

const hourshand = document.getElementById('hours-hand');
const minuteshand = document.getElementById('minutes-hand');
const secondshand = document.getElementById('seconds-hand');

function getCurrentTime() {
  currentTime = new Date();
  seconds = currentTime.getSeconds(); // 0-59
  minutes = currentTime.getMinutes(); // 0-59
  hours = currentTime.getHours(); //0-23
}

function calculateAngles(){
  secondsangle = 90 + seconds * 6;
  minutesangle = 90 + minutes * 6;
  hoursangle = 90 + hours *30;
}

// Made with CSS animations, TODO: update to JS animations
function applyAngles(){
  secondshand.style.transform = "rotate(" + secondsangle + "deg)";
  minuteshand.style.transform = "rotate(" + minutesangle + "deg)";
  hourshand.style.transform = "rotate(" +hoursangle + "deg)";
}

function clock(){
  applyAngles();
  setTimeout(clock, 1000);
  secondsangle += 6;
  minutesangle += 0.1;
  hoursangle += 0.1 / 24;
}

getCurrentTime();
calculateAngles();
clock();
