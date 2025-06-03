"use strict";
const hold = document.querySelector(".hold");
const rollDice = document.querySelector(".rollDice");
const newGame = document.querySelector(".newGame");
const img = document.querySelector(".image");
const score = document.querySelector(".score");
const currentScore = document.querySelector(".currentScore");
let currScore = 0;

rollDice.addEventListener("click", function () {
  img.classList.remove("hidden");
  //Calculating dice value
  const num = Number(Math.trunc(Math.random() * 6) + 1);
  console.log(num);
  //Changing the dice image accordingly
  img.src = `dice-${num}.png`;

  //if dice number isn't 1
  if (num != 1) {
    currScore = currScore + num;
    currentScore.textContent = currScore;
  }
  //If number on dice is 1 then current score becomes 0 and play shifts to different player.
  if (num === 1) {
    currScore = 0;
    currentScore.textContent = 0;
  }
});
