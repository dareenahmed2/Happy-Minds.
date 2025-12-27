const words = [
  { word: "Apple", type: "fruit" },
  { word: "Banana", type: "fruit" },
  { word: "Orange", type: "fruit" },
  { word: "Cat", type: "animal" },
  { word: "Dog", type: "animal" },
  { word: "Fish", type: "animal" },
  { word: "Book", type: "object" },
  { word: "Bag", type: "object" },
  { word: "Ball", type: "object" },
  { word: "Car", type: "object" }
];

let index = 0;
let selected = false;
let currentWord = null;

const fallingWord = document.getElementById("fallingWord");
const message = document.getElementById("message");
const boxes = document.querySelectorAll(".box");

function startGame() {
  showWord();
}

function showWord() {
  if (index >= words.length) {
    message.innerText = "🎉 Excellent! You finished the game!";
    fallingWord.style.display = "none";
    document.getElementById("backBtn").style.display = "block";
    return;
  }

  currentWord = words[index];
  fallingWord.innerText = currentWord.word;
  fallingWord.style.display = "block";
  selected = false;

  boxes.forEach(box => {
    box.classList.remove("active", "correct", "wrong");
  });

  message.innerText = "Click the word, then choose the right box 👇";
}

fallingWord.onclick = () => {
  selected = true;
  boxes.forEach(box => box.classList.add("active"));
};

boxes.forEach(box => {
  box.onclick = () => {
    if (!selected) return;

    if (box.dataset.type === currentWord.type) {
      box.classList.add("correct");
      message.innerText = "✔ Correct!";
      index++;
      setTimeout(showWord, 800);
    } else {
      box.classList.add("wrong");
      message.innerText = "❌ Try Again!";
    }
  };
});

function goBack() {
  window.location.href = "English.html";
}

startGame();
