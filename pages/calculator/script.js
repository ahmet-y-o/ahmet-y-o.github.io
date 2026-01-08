var calculator = document.getElementsByClassName('calculator')[0];
var operation = "none";

// EMPTY BUTTON FOR LAYOUT
var empty = document.createElement('div');
empty.innerHTML = "<<";
empty.setAttribute("id", "empty");
empty.classList.add("button");
empty.addEventListener('click', function(e){
  empty.classList.add("active-special");
  if(display.innerHTML == "0" || display.innerHTML == "Infinite"){

  } else if(display.innerHTML.length == "1"){
    display.innerHTML = "0";
  } else {
    display.innerHTML = display.innerHTML.slice(0,-1);
  }

});
empty.addEventListener('transitionend', function(e){
empty.classList.remove("active-special");
});


// CREATING DIGITS
for (i=0; i<10 ; i++) {
  var div = document.createElement('div');
  calculator.appendChild(div);
  div.setAttribute("id", i);
  div.innerHTML = i;
  div.classList.add("button");
  div.addEventListener('click', digitButtonClick);
  div.addEventListener('transitionend', function(e) {
    this.classList.remove("active-digit");
  });
}

//OPERATIONS
var addition = document.createElement('div');
addition.setAttribute("id", "addition");
addition.innerHTML = "+";
addition.classList.add("button");
addition.addEventListener('click', function(e){
  if(operation == "none"){
    firstoperand.innerHTML = Number(display.innerHTML);
    clearOperation();
    display.innerHTML = 0;
    addition.classList.add('active-operation');
    operation = 'addition';
  } else if(operation == "addition"){
    display.innerHTML = firstoperand.innerHTML;
    firstoperand.innerHTML = "0";
    clearOperation();
  } else{
    clearOperation();
    operation = "addition";
  }
});

var substraction = document.createElement('div');
substraction.setAttribute("id", "substraction");
substraction.innerHTML = "-";
substraction.classList.add("button");
substraction.addEventListener('click', function(e){
  if(operation == "none"){
    firstoperand.innerHTML = Number(display.innerHTML);
    clearOperation();
    display.innerHTML = 0;
    substraction.classList.add('active-operation');
    operation = 'substraction';
  } else if(operation == "substraction"){
    display.innerHTML = firstoperand.innerHTML;
    firstoperand.innerHTML = "0";
    clearOperation();
  } else{
    clearOperation();
    operation = "substraction";
  }
});

var multiplication = document.createElement('div');
multiplication.setAttribute("id", "multiplication");
multiplication.innerHTML = "X";
multiplication.classList.add("button");
multiplication.addEventListener('click', function(e){
  if(operation == "none"){
    firstoperand.innerHTML = Number(display.innerHTML);
    clearOperation();
    display.innerHTML = 0;
    multiplication.classList.add('active-operation');
    operation = 'multiplication';
  } else if(operation == "multiplication"){
    display.innerHTML = firstoperand.innerHTML;
    firstoperand.innerHTML = "0";
    clearOperation();
  } else{
    clearOperation();
    operation = "multiplication";
  }
});

var division = document.createElement('div');
division.setAttribute("id", "division");
division.innerHTML = "/";
division.classList.add("button");
division.addEventListener('click', function(e){
  if(operation == "none"){
    firstoperand.innerHTML = Number(display.innerHTML);
    clearOperation();
    display.innerHTML = 0;
    division.classList.add('active-operation');
    operation = 'division';
  } else if(operation == "division"){
    display.innerHTML = firstoperand.innerHTML;
    firstoperand.innerHTML = "0";
    clearOperation();
  } else{
    clearOperation();
    operation = "division";
  }
});


var square = document.createElement('div');
square.setAttribute("id", "square");
square.innerHTML = 'x^y';
square.classList.add("button");
square.addEventListener('click', function(e){
  if(operation == "none"){
    firstoperand.innerHTML = Number(display.innerHTML);
    clearOperation();
    display.innerHTML = 0;
    square.classList.add('active-operation');
    operation = 'power';
  } else if(operation == "power"){
    display.innerHTML = firstoperand.innerHTML;
    firstoperand.innerHTML = "0";
    clearOperation();
  } else{
    clearOperation();
    operation = "power";
  }
})


// SPECIAL BUTTONS
var clear = document.createElement('div');
clear.setAttribute("id", "clear");
clear.innerHTML = "C";
clear.classList.add("button");
clear.addEventListener('click', function(e){
  clear.classList.add("active-special");
  firstoperand.innerHTML = "0";
  display.innerHTML = "0";
  operation = "none";
  clearOperation();
});
clear.addEventListener('transitionend', function(e){
  clear.classList.remove("active-special");
})


var equals = document.createElement('div');
equals.setAttribute("id", "equals");
equals.innerHTML = "=";
equals.classList.add("button");
equals.addEventListener('click', function(e){
  equals.classList.add("active-special");
  if(operation == "none"){

  } else if(operation == "addition"){
    display.innerHTML = Number(firstoperand.innerHTML) + Number(display.innerHTML);
    firstoperand.innerHTML = "0";
  } else if(operation == "substraction"){
    display.innerHTML = Number(firstoperand.innerHTML) - Number(display.innerHTML);
    firstoperand.innerHTML = "0";
  } else if(operation == "multiplication"){
    display.innerHTML = Number(firstoperand.innerHTML) * Number(display.innerHTML);
    firstoperand.innerHTML = "0";
  } else if(operation == "division"){
    display.innerHTML = Number(firstoperand.innerHTML) / Number(display.innerHTML);
    firstoperand.innerHTML = "0";
  } else if(operation == "power"){
    display.innerHTML = Math.pow(Number(firstoperand.innerHTML), Number(display.innerHTML));
    firstoperand.innerHTML = "0";
  }
  clearOperation();
});
equals.addEventListener('transitionend', function(e){
  equals.classList.remove("active-special");
});

var squareroot = document.createElement('div');
squareroot.setAttribute("id", "squareroot");
squareroot.innerHTML = "√";
squareroot.classList.add("button");
squareroot.addEventListener('click', function(e) {
  squareroot.classList.add("active-special");
  clearOperation();
  firstoperand.innerHTML = "0";
  display.innerHTML = Math.sqrt(Number(display.innerHTML));
});
squareroot.addEventListener('transitionend', function(e){
  squareroot.classList.remove("active-special");
});

//DISPLAY

var firstoperand = document.createElement('div');
firstoperand.setAttribute("id", "firstoperand");
firstoperand.innerHTML = "0";
firstoperand.classList.add("button");

var display = document.createElement('div');
display.setAttribute("id", "display");
display.innerHTML = "0";
display.classList.add("button");

var firstrow = document.createElement('div');
firstrow.classList.add("row");
firstrow.setAttribute("id", "firstrow");
firstrow.appendChild(empty);
firstrow.appendChild(squareroot);
firstrow.appendChild(square);
firstrow.appendChild(addition);

var secondrow = document.createElement('div');
secondrow.classList.add("row");
secondrow.setAttribute("id", "secondrow");
secondrow.appendChild(document.getElementById("7"));
secondrow.appendChild(document.getElementById("8"));
secondrow.appendChild(document.getElementById("9"));
secondrow.appendChild(substraction);

var thirdrow = document.createElement('div');
thirdrow.classList.add("row");
thirdrow.setAttribute("id", "thirdrow");
thirdrow.appendChild(document.getElementById("4"));
thirdrow.appendChild(document.getElementById("5"));
thirdrow.appendChild(document.getElementById("6"));
thirdrow.appendChild(multiplication);

var fourthrow = document.createElement('div');
fourthrow.classList.add("row");
fourthrow.setAttribute("id", "fourthrow");
fourthrow.appendChild(document.getElementById("1"));
fourthrow.appendChild(document.getElementById("2"));
fourthrow.appendChild(document.getElementById("3"));
fourthrow.appendChild(division);

var fifthrow = document.createElement('div');
fifthrow.classList.add("row");
fifthrow.setAttribute("id", "fifthrow");
fifthrow.appendChild(clear);
fifthrow.appendChild(document.getElementById("0"));
fifthrow.appendChild(equals);


calculator.appendChild(firstoperand);
calculator.appendChild(display);
calculator.appendChild(firstrow);
calculator.appendChild(secondrow);
calculator.appendChild(thirdrow);
calculator.appendChild(fourthrow);
calculator.appendChild(fifthrow);

/*
var newDiv = document.createElement('div');
body.appendChild(newDiv);
div.setAttribute("class", "button");
div.classList.add("hey");
*/

function clearOperation(){
  operation = "none"
  addition.classList.remove('active-operation');
  substraction.classList.remove('active-operation');
  multiplication.classList.remove('active-operation');
  division.classList.remove('active-operation');
  square.classList.remove('active-operation');
}

function digitButtonClick(e) {
  if(display.innerHTML == "0"){
    display.innerHTML = e.target.id;
  } else {
    display.innerHTML = display.innerHTML + e.target.id;
  }
  this.classList.add("active-digit");
}
