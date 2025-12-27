const grid = document.getElementById("grid");
const targetNumber = document.getElementById("targetNumber");
const scoreDisplay = document.getElementById("score");
const timeDisplay = document.getElementById("time");
const startBtn = document.getElementById("startBtn");

let score = 0;
let timeLeft = 30;
let gameInterval;
let currentTarget = 0;

function generateGrid() {
  grid.innerHTML = "";
  for (let i = 0; i < 16; i++) {
    const number = Math.floor(Math.random() * 50) + 1;
    const btn = document.createElement("button");
    btn.textContent = number;
    btn.addEventListener("click", () => {
      if (parseInt(btn.textContent) === currentTarget) {
        score++;
        scoreDisplay.textContent = score;
        generateRound();
      } else {
        score--;
        scoreDisplay.textContent = score;
        generateRound();
      }
    });
    grid.appendChild(btn);
  }
}

function generateRound() {
  const buttons = grid.querySelectorAll("button");
  if (buttons.length > 0) {
    const randomIndex = Math.floor(Math.random() * buttons.length);
    currentTarget = parseInt(buttons[randomIndex].textContent);
    targetNumber.textContent = currentTarget;
  }
}

function startGame() {
  score = 0;
  timeLeft = 30;
  scoreDisplay.textContent = score;
  timeDisplay.textContent = timeLeft;
  startBtn.disabled = true;

  generateGrid();
  generateRound();

  gameInterval = setInterval(() => {
    timeLeft--;
    timeDisplay.textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(gameInterval);
      targetNumber.textContent = "--";
      alert("⏰ Time's up! Your score: " + score);
      startBtn.disabled = false;
    }
  }, 1000);
}

startBtn.addEventListener("click", startGame);
