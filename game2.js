const words = [
  { image: "https://i.pinimg.com/736x/93/ee/ae/93eeae50f268042e49cb8cec649f9c9e.jpg", word: "APPLE" },
  { image: "https://i.pinimg.com/736x/f7/27/01/f7270152e4301ef9c3798dbf8c30d95c.jpg", word: "BANANA" },
  { image: "https://i.pinimg.com/736x/11/c3/28/11c328a9a09929527e163918448aea4e.jpg", word: "CAT" },
  { image: "https://i.pinimg.com/736x/8d/dc/df/8ddcdf532720dbc39cc5c2d5faea7358.jpg", word: "DOG" },
  { image: "https://i.pinimg.com/1200x/4e/bf/34/4ebf340972eb39ac7b23e22c061a663c.jpg", word: "CAR" },
  { image: "https://i.pinimg.com/736x/18/fd/75/18fd75b855af4eb6aa979b96062fc7bf.jpg", word: "BOOK" },
  { image: "https://i.pinimg.com/736x/a7/55/42/a755428397c371b61dac52ffce79cd47.jpg", word: "BALL" },
  { image: "https://i.pinimg.com/1200x/c9/af/7c/c9af7c13e98a25da9c7c05583ddb5185.jpg", word: "BAG" },
  { image: "https://i.pinimg.com/736x/62/31/9f/62319fb2bf540973d0aeff451e704254.jpg", word: "TREE" },
  { image: "https://i.pinimg.com/1200x/d5/80/93/d58093b269be39eb338ffabf127e6433.jpg", word: "FISH" }
];

let current = 0;
let userAnswer = "";

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function loadWord() {
  const currentWord = words[current].word;
  userAnswer = "";

  document.getElementById("wordImage").src = words[current].image;
  document.getElementById("message").innerText = "";
  document.getElementById("nextBtn").style.display = "none";

  const answerBox = document.getElementById("answerBox");
  const lettersBox = document.getElementById("lettersBox");

  answerBox.innerHTML = "";
  lettersBox.innerHTML = "";

  for (let i = 0; i < currentWord.length; i++) {
    const slot = document.createElement("div");
    slot.className = "answer-slot";
    answerBox.appendChild(slot);
  }

  shuffle(currentWord.split("")).forEach(letter => {
    const div = document.createElement("div");
    div.className = "letter";
    div.innerText = letter;
    div.onclick = () => selectLetter(letter, div);
    lettersBox.appendChild(div);
  });
}

function selectLetter(letter, element) {
  if (userAnswer.length < words[current].word.length) {
    userAnswer += letter;
    document.querySelectorAll(".answer-slot")[userAnswer.length - 1].innerText = letter;
    element.style.visibility = "hidden";
  }

  if (userAnswer.length === words[current].word.length) {
    checkWord();
  }
}

function checkWord() {
  if (userAnswer === words[current].word) {
    document.getElementById("message").innerText = "✅ Great Job!";
    document.getElementById("nextBtn").style.display = "inline-block";
  } else {
    document.getElementById("message").innerText = "❌ Try Again!";
  }
}

function nextWord() {
  current++;
  if (current < words.length) {
    loadWord();
  } else {
    document.getElementById("gameBox").innerHTML = `
      <h2>🏆 You Win!</h2>
      <p>You finished all words 🎉</p>
      <button onclick="goBack()" style="
        padding:15px 25px;
        font-size:18px;
        border:none;
        border-radius:12px;
        background:#6c5ce7;
        color:white;
        cursor:pointer;
      ">⬅ Back to English</button>
    `;
  }
}

function goBack() {
  window.location.href = "English.html";
}

loadWord();
