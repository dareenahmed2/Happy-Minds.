const questions = [
  { image: "https://cdn-icons-png.flaticon.com/512/415/415733.png", answers: ["Apple", "Banana", "Orange"], correct: 0 },
  { image: "https://cdn-icons-png.flaticon.com/512/2972/2972185.png", answers: ["bike", "Apple", "Grapes"], correct: 0 },
  { image: "https://cdn-icons-png.flaticon.com/512/1998/1998627.png", answers: ["Cat", "Dog", "Fish"], correct: 1 },
  { image: "https://cdn-icons-png.flaticon.com/512/194/194931.png", answers: ["Dog", "student", "Horse"], correct: 1 },
  { image: "https://i.pinimg.com/736x/55/2c/23/552c23f96377cad904af92d290f298d8.jpg", answers: ["Car", "Bus", "Bike"], correct: 0 },
  { image: "https://i.pinimg.com/736x/1b/ca/e2/1bcae2230d784d878127366dc9cee332.jpg", answers: ["Ball", "Doll", "Car"], correct: 0 },
  { image: "https://cdn-icons-png.flaticon.com/512/2921/2921822.png", answers: ["Book", "Pen", "food"], correct: 2 },
  { image: "https://i.pinimg.com/1200x/2d/ec/11/2dec1144ae7e4f192c8aab99067d94dc.jpg", answers: ["Bag", "carrot", "Pen"], correct: 1 },
  { image: "https://i.pinimg.com/1200x/dc/06/f5/dc06f54e8886a3f7b199edb134250bf1.jpg", answers: ["Tree", "Flower", "Grass"], correct: 1 },
  { image: "https://i.pinimg.com/1200x/d5/80/93/d58093b269be39eb338ffabf127e6433.jpg", answers: ["Fish", "Shark", "Whale"], correct: 0 }
];

let current = 0;

function loadQuestion() {
  document.getElementById("image").src = questions[current].image;
  document.getElementById("btn0").innerText = questions[current].answers[0];
  document.getElementById("btn1").innerText = questions[current].answers[1];
  document.getElementById("btn2").innerText = questions[current].answers[2];
  document.getElementById("result").innerText = "";
  document.getElementById("nextBtn").style.display = "none";
  // hide try buttons and enable answer buttons
  for (let i = 0; i < 3; i++) {
    const tryBtn = document.getElementById('try' + i);
    const ansBtn = document.getElementById('btn' + i);
    if (tryBtn) tryBtn.style.display = 'none';
    if (ansBtn) ansBtn.disabled = false;
  }
}

function checkAnswer(index) {
  if (index === questions[current].correct) {
    document.getElementById("result").innerText = "✅ Correct!";
    document.getElementById("nextBtn").style.display = "inline-block";
  } else {
    document.getElementById("result").innerText = "❌ Try again!";

    const tryBtn = document.getElementById('try' + index);
    const ansBtn = document.getElementById('btn' + index);
    if (tryBtn) tryBtn.style.display = 'inline-block';
    if (ansBtn) ansBtn.disabled = true;
  }
}

function nextQuestion() {
  current++;
  if (current < questions.length) {
    loadQuestion();
  } else {
    document.getElementById("gameBox").innerHTML = `
      <h2>🎉 Congratulations!</h2>
      <p>You finished all 10 questions ⭐</p>
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
  window.location.href = "english.html";
}

function retryQuestion(index) {

  const tryBtn = document.getElementById('try' + index);
  const ansBtn = document.getElementById('btn' + index);
  if (tryBtn) tryBtn.style.display = 'none';
  if (ansBtn) ansBtn.disabled = false;
  document.getElementById('result').innerText = '';

  loadQuestion();
}

loadQuestion();
