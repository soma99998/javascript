"use strict";

const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

//staring condition

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");
let currentSore = 0;
// rolling dice function

btnRoll.addEventListener("click", function () {
  //generate random dice

  const dice = Math.trunc(Math.random() * 6) + 1;

  //display dice

  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${dice}.png`;

  //check for rolled 1 , if true switch to
  // next player
  if (dice !== 1) {
    // add dice to current score
    currentSore += dice;
    current0El.textContent = currentSore;
    console.log(typeof currentSore);
  } else {
    current0El.textContent = 0;
    currentSore = 0;
  }
});
