"use strict";

let currentScore0 = 0;
let currentScore1 = 0;

// Selecting elements
const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const current0EL = document.getElementById("current--0");
const current1EL = document.getElementById("current--1");
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

// Starting Conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

// Events
btnRoll.addEventListener("click", () => {
  let diceNum = Math.trunc(Math.random() * 6 + 1);
  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${diceNum}.png`;

  if (diceNum !== 1 && player0El.classList.contains("player--active")) {
    currentScore0 += diceNum;
    current0EL.textContent = currentScore0;
  } else if (diceNum === 1 && player0El.classList.contains("player--active")) {
    player0El.classList.remove("player--active");
    player1El.classList.add("player--active");
  } else if (diceNum !== 1 && player1El.classList.contains("player--active")) {
    currentScore1 += diceNum;
    current1EL.textContent = currentScore1;
  } else if (diceNum === 1 && player1El.classList.contains("player--active")) {
    player1El.classList.remove("player--active");
    player0El.classList.add("player--active");
  }
});
