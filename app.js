var score = 0;
var clickAmount = 1;
var autoclickercost = 100;
var autoclickers = 0;
var multipliercost = 10;
var multipliers = 0;

function buyAutoClicker() {
  if (score >= autoclickercost) {
    score = score - autoclickercost;
    autoclickers = autoclickers + 1;
    autoclickercost = Math.round(autoclickercost * 1.15);

    document.getElementById("score").innerHTML = score;
    document.getElementById("autoclickercost").innerHTML = autoclickercost;
    document.getElementById("autoclickers").innerHTML = autoclickers;
    updateScorePerSecond();
  }
}
function buyMultiplier() {
    if (score >= multipliercost) {
      score = score - multipliercost;
      multipliers = multipliers + 1;
      multipliercost = Math.round(multipliercost * 1.15);
  
      document.getElementById("score").innerHTML = score;
      document.getElementById("multipliercost").innerHTML = multipliercost;
      document.getElementById("multipliers").innerHTML = multipliers;
      updateScorePerSecond();
    }
  }

function addToScore(amount) {
  score = score + amount;
  document.getElementById("score").innerHTML = score;
}
function updateScorePerSecond () {
    scorePerSecond = autoclickers + multipliers * 5;
    document.getElementById("scorepersecond").innerHTML = scorePerSecond;
}
setInterval(function() {
    score = score + autoclickers;
    score = score + multipliers * 1.5;
    document.getElementById("score").innerHTML = score;

    document.title = score + "donuts - Donut Clicker";
}, 1200);