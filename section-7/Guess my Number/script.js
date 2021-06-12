"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

function displayMessage(message) {
  document.querySelector(".message").textContent = message;
}

function displayNumber(number) {
  document.querySelector(".number").textContent = number;
}

function displayScore(score) {
  document.querySelector(".score").textContent = score;
}

// Check Button
document.querySelector(".check").addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);

  // When there is no input
  if (!guess) {
    displayMessage("No Number!");

    // When guess is correct
  } else if (guess === secretNumber) {
    displayMessage("Correct Number!");
    displayNumber(secretNumber);

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highScore").textContent = highScore;
    }

    // guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > secretNumber ? "Too High!" : "Too Low!";
      score--;
      displayScore(score);
    } else {
      displayMessage("You lost the game..");
      displayScore(0);
    }
  }
});

// Play Again button
document.querySelector(".again").addEventListener("click", () => {
  score = 20;
  displayScore(score);
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start guessing...");
  displayNumber("?");
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".guess").value = "";
});
