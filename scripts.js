const botOptions = ["rock", "paper", "scissors"];

const botCards = document.querySelectorAll(".bot-player .container > .card");
let botChoice, randomBotChoice;

const showWinText = document.querySelector(".showWinerText");

const userPaper = document.querySelector(".user-card__paper");
const userRock = document.querySelector(".user-card__rock");
const userScissors = document.querySelector(".user-card__scissors");

function choiceBot() {
  // choose a random option for the bot
  randomBotChoice = Math.floor(Math.random() * 3);
  botChoice = botOptions[randomBotChoice];

  // show the bot selection
  botCards.forEach((card) => {
    if (botChoice === card.dataset.id) {
      botChoice = card;
      card.style.backgroundColor = "red";
    }
  });

  // show the user selection
  this.style.backgroundColor = "red";
  // show the winner
  whoWin(this);
}

function whoWin(user) {
  // check the no-win situation
  if (user.dataset.id === botChoice.dataset.id) {
    showWinText.innerText = "no win!";
  } else if (user.dataset.id === "rock") {
    // check the rock situation for user
    if (botChoice.dataset.id === "paper") {
      showWinText.innerText = "bot win!";
    } else {
      showWinText.innerText = "user win!";
    }
  } else if (user.dataset.id === "paper") {
    // check the paper situarion for user
    if (botChoice.dataset.id === "scissors") {
      showWinText.innerText = "bot win!";
    } else {
      showWinText.innerText = "user win!";
    }
  } else if (user.dataset.id === "scissors") {
    // check the scissors situation for user
    if (botChoice.dataset.id === "rock") {
      showWinText.innerText = "bot win!";
    } else {
      showWinText.innerText = "user win!";
    }
  }
}

// click events
userPaper.addEventListener("click", choiceBot);
userRock.addEventListener("click", choiceBot);
userScissors.addEventListener("click", choiceBot);
