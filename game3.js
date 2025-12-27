const data = [
  { word: "Apple", img: "https://cdn-icons-png.flaticon.com/512/415/415733.png" },
  { word: "Banana", img: "https://i.pinimg.com/736x/f7/27/01/f7270152e4301ef9c3798dbf8c30d95c.jpg" },
  { word: "Cat", img: "https://i.pinimg.com/736x/c4/8d/38/c48d38ca2deb7a315f5d8bba9aeb9fd5.jpg" },
  { word: "Dog", img: "https://i.pinimg.com/736x/db/f8/5b/dbf85b274e5379f428b8d6427b438938.jpg" },
  { word: "Car", img: "https://i.pinimg.com/736x/55/2c/23/552c23f96377cad904af92d290f298d8.jpg" },
  { word: "Book", img: "https://i.pinimg.com/1200x/75/45/55/7545552edfdb71bf944043a03c61d905.jpg" },
  { word: "Ball", img: "https://i.pinimg.com/736x/5e/fd/0e/5efd0e5c7cbbc8d25be90dc81adbd2c4.jpg" },
  { word: "Bag", img: "https://i.pinimg.com/1200x/f3/ec/e9/f3ece9869fa12e5bc0ac9b63527981ad.jpg" },
  { word: "Tree", img: "https://i.pinimg.com/736x/62/31/9f/62319fb2bf540973d0aeff451e704254.jpg" },
  { word: "Fish", img: "https://i.pinimg.com/1200x/d5/80/93/d58093b269be39eb338ffabf127e6433.jpg" }
];

let selectedWord = null;
let correctCount = 0;

function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

function loadGame() {
  const wordsDiv = document.getElementById("words");
  const picturesDiv = document.getElementById("pictures");

  wordsDiv.innerHTML = "";
  picturesDiv.innerHTML = "";

  shuffle([...data]).forEach(item => {
    const wordDiv = document.createElement("div");
    wordDiv.className = "word";
    wordDiv.innerText = item.word;
    wordDiv.onclick = () => selectWord(wordDiv, item.word);
    wordsDiv.appendChild(wordDiv);
  });

  shuffle([...data]).forEach(item => {
    const picDiv = document.createElement("div");
    picDiv.className = "picture";
    picDiv.dataset.word = item.word;
    picDiv.innerHTML = `
      <img src="${item.img}">
      <div class="slot"></div>
    `;
    picDiv.onclick = () => placeWord(picDiv);
    picturesDiv.appendChild(picDiv);
  });
}

function selectWord(element, word) {
  document.querySelectorAll(".word").forEach(w => w.classList.remove("selected"));
  document.querySelectorAll(".picture").forEach(p => p.classList.add("active"));

  element.classList.add("selected");
  selectedWord = { element, word };
}

function placeWord(picture) {
  if (!selectedWord) return;

  if (picture.dataset.word === selectedWord.word) {
    picture.querySelector(".slot").innerText = selectedWord.word;
    picture.classList.add("correct");
    selectedWord.element.style.display = "none";

    document.querySelectorAll(".picture").forEach(p => p.classList.remove("active"));

    selectedWord = null;
    correctCount++;

    document.getElementById("message").innerText = "✔ Correct!";

    if (correctCount === data.length) {
      document.getElementById("message").innerText = "🎉 Excellent! You finished the game!";
      document.getElementById("backBtn").style.display = "inline-block";
    }
  } else {
    document.getElementById("message").innerText = "❌ Try again!";
  }
}

function goBack() {
  window.location.href = "English.html";
}

loadGame();
