var r = document.querySelector('#Inputred');
var g = document.querySelector('#Inputgreen');
var b = document.querySelector('#Inputblue');
var valuered = document.querySelector('#valuered');
var valuegreen = document.querySelector('#valuegreen');
var valueblue = document.querySelector('#valueblue');

function start() {
  r.value = 0;
  g.value = 0;
  b.value = 0;
  r.addEventListener('input', handleRangeValueChange);
  g.addEventListener('input', handleRangeValueGreen);
  b.addEventListener('input', handleRangeValueBlue);
}

function handleRangeValueChange(event) {
  var events = event.target.value;
  valuered.value = events;
  changeRGB();
}

function handleRangeValueGreen(event) {
  var events = event.target.value;
  valuegreen.value = events;
  changeRGB();
}

function handleRangeValueBlue(event) {
  var events = event.target.value;
  valueblue.value = events;
  changeRGB();
}

function changeRGB() {
  let box = document.querySelector('#color');
  let rgb = `rgb(${r.value}, ${g.value}, ${b.value})`;
  box.style.background = rgb;
  console.log(box);
}

start();
