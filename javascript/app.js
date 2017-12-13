

var yourScore = document.getElementById('yourScore');

yourScore.innerHTML = 0;
var totalScore = document.getElementById('totalScore');
// var targetScore = document.getElementById('targetScore');
targetScore.innerHTML = getRandomValue(10, 4);

function addToScore(val) {
  var numberToAdd = parseInt(val);
  var currentScore = parseInt(yourScore.innerHTML);
  yourScore.innerHTML = numberToAdd + currentScore;
}

var d = document.getElementById("d");
// d.setAttribute("value", "5");

var w = document.getElementById("w");
// w.setAttribute("value", "10");


var l = document.getElementById("l");
// l.setAttribute("value", "15");


var c = document.getElementById("c");
// c.setAttribute("value", "20");

// event listener
d.addEventListener('click', function() {
  addToScore(this.value);
  checkPlayerScore();
});

w.addEventListener('click', function() {
  addToScore(this.value);
  checkPlayerScore();
});

l.addEventListener('click', function() {
  addToScore(this.value);
  checkPlayerScore();
});

c.addEventListener('click', function() {
  addToScore(this.value);
  checkPlayerScore();
});

// console.log (sum);
function getRandomValue (a, b){
  return Math.floor((Math.random() * a) + b);
}

function checkPlayerScore() {
  //yourScore, targetScore (parseFloat() is for decimals)
  var playerInt = parseInt(yourScore.innerHTML);
  var targetInt = parseInt(targetScore.innerHTML);
  if (playerInt === targetInt) {
      alert('You win!');
  } else if (playerInt > targetInt) {
    alert('You lose!');
  }
}

// console.log(getRandomValue(10, 4));
