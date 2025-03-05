"use strict";

const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
//staring condition

let scores, currentSore, activePlayer, playing;
const init = function () {
  scores = [0, 0];
  score0El.textContent = 0;
  score1El.textContent = 0;
  diceEl.classList.add("hidden");
  currentSore = 0;
  activePlayer = 0;
  playing = true;
  current0El.textContent = 0;
  current1El.textContent = 0;
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
};
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
  currentSore = 0;
};
// rolling dice function

btnRoll.addEventListener("click", function () {
  //generate random dice
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;

    //display dice

    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`;

    //check for rolled 1 , if true switch to
    // next player
    if (dice !== 1) {
      // add dice to current score
      currentSore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentSore;
      //current0El.textContent = currentSore;
      console.log(typeof currentSore);
    } else {
      //switch to next player
      switchPlayer();
      //document.getElementById(`current--${activePlayer}`).textContent = 0;
      // current0El.textContent = 0;
    }
  }
});
btnHold.addEventListener("click", function () {
  if (playing) {
    //add current score to active player's score
    scores[activePlayer] += currentSore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // check if player's score >=100 , win the game
    if (scores[activePlayer] >= 10) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      diceEl.classList.add("hidden");
    } else {
      //,switch to next player

      switchPlayer();
    }
  }
});
btnNew.addEventListener("click", init);
// if (!playing) {
//   console.log(playing);
//   document.getElementById(`current--${activePlayer}`).textContent = 0;
//   document.getElementById(`score--${activePlayer}`).textContent = 0;
//   document
//     .querySelector(`.player--${activePlayer}`)
//     .classList.remove("player--winner");
//   document
//     .querySelector(`.player--${activePlayer}`)
//     .classList.add("player--active");
//   diceEl.classList.remove("hidden");
//   playing = true
