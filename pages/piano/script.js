var c3 = new Audio("wav/C3.mp3"); // a
var db3 = new Audio("wav/Db3.mp3") // w
var d3 = new Audio("wav/D3.mp3"); // s
var eb3 = new Audio("wav/Eb3.mp3"); // e
var e3 = new Audio("wav/E3.mp3"); // d
var f3 = new Audio("wav/F3.mp3"); // f
var gb3 = new Audio("wav/Gb3.mp3"); // t
var g3 = new Audio("wav/G3.mp3"); // g
var ab3 = new Audio("wav/Ab3.mp3"); // y
var a3 = new Audio("wav/A3.mp3"); // h
var bb3 = new Audio("wav/Bb3.mp3") // u
var b3 = new Audio("wav/B3.mp3"); // j
var c4 = new Audio("wav/C4.mp3"); // k
var db4 = new Audio("wav/Db4.mp3"); // o
var d4 = new Audio("wav/D4.mp3"); // l

const pianoKeys = document.querySelectorAll('.piano-key');

for(i = 0; i < pianoKeys.length; i++){
	var key = pianoKeys[i];
	key.addEventListener('transitionend', function(e){
		if(e.propertyName !== 'border-left-color') return;
		this.classList.remove('playing');
	});
	key.addEventListener('click', playNote);
}

function playNote(e){
	if(e.key == "a" || e.target.id == 'c3'){
		document.querySelector('#c3').classList.add('playing');
		c3.currentTime = 0;
		c3.play();
	} else if(e.key =="s" || e.target.id == 'd3'){
		document.querySelector('#d3').classList.add('playing');
		d3.currentTime = 0;
		d3.play();
	} else if(e.key == "d" || e.target.id == 'e3'){
		document.querySelector('#e3').classList.add('playing');
		e3.currentTime = 0;
		e3.play();
	} else if(e.key == "f" || e.target.id == 'f3'){
		document.querySelector('#f3').classList.add('playing');
		f3.currentTime = 0;
		f3.play();
	} else if(e.key == "g" || e.target.id == 'g3'){
		document.querySelector('#g3').classList.add('playing');
		g3.currentTime = 0;
		g3.play();
	} else if(e.key == "h" || e.target.id == 'a3'){
		document.querySelector('#a3').classList.add('playing');
		a3.currentTime = 0;
		a3.play();
	} else if(e.key == "j" || e.target.id == 'b3'){
		document.querySelector('#b3').classList.add('playing');
		b3.currentTime = 0;
		b3.play();
	} else if(e.key == "k" || e.target.id == 'c4'){
		document.querySelector('#c4').classList.add('playing');
		c4.currentTime = 0;
		c4.play();
	} else if(e.key == "l" || e.target.id == 'd4'){
		document.querySelector('#d4').classList.add('playing');
		d4.currentTime = 0.;
		d4.play();
	} else if(e.key == "w" || e.target.id == 'db3'){
		document.querySelector('#db3').classList.add('playing');
		db3.currentTime = 0;
		db3.play();
	} else if(e.key == "e" || e.target.id == 'eb3'){
		document.querySelector('#eb3').classList.add('playing');
		eb3.currentTime = 0;
		eb3.play();
	} else if(e.key == "t" || e.target.id == 'gb3'){
		document.querySelector('#gb3').classList.add('playing');
		gb3.currentTime = 0;
		gb3.play();
	} else if(e.key == "y" || e.target.id == 'ab3'){
		document.querySelector('#ab3').classList.add('playing');
		ab3.currentTime = 0;
		ab3.play();
	} else if(e.key == "u" || e.target.id == 'bb3'){
		document.querySelector('#bb3').classList.add('playing');
		bb3.currentTime = 0;
		bb3.play();
	} else if(e.key == "o" || e.target.id == 'db4'){
		document.querySelector('#db4').classList.add('playing');
		db4.currentTime = 0;
		db4.play();
	} else {
		console.log(e.key + " is not a piano key");
	}
}

document.addEventListener("keydown", playNote);
