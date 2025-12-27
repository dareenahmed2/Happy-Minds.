const sound = document.getElementById("welcomeSound");
const welcomeText = document.getElementById("welcomeText");
const startButton = document.getElementById("startButton");

const loginBtn = document.getElementById("loginBtn");
const modal = document.getElementById("loginModal");
const closeBtn = document.getElementById("closeModal");
const form = document.getElementById("registerForm");
const userArea = document.getElementById("userArea");

let played = false;


welcomeText.addEventListener("click", () => {
  if(!played){ sound.play(); played = true; }
});


if (localStorage.getItem("loggedIn") === "true") {
  welcomeText.classList.add("hide");
}


registerForm.addEventListener("submit", function (e) {
  e.preventDefault();

  localStorage.setItem("loggedIn", "true");

  welcomeText.classList.add("hide");
});


loginBtn.addEventListener("click", e => {
  e.preventDefault();
  modal.style.display = "flex";
});

closeBtn.addEventListener("click", () => { modal.style.display = "none"; });
window.addEventListener("click", e => { if(e.target==modal) modal.style.display="none"; });


form.addEventListener("submit", e => {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const avatar = document.querySelector('input[name="avatar"]:checked').value;


  sessionStorage.setItem("username", username);
  sessionStorage.setItem("avatar", avatar);

  showUser();
  modal.style.display = "none";

  welcomeText.style.display = "none";
  startButton.style.display = "inline-block";
});


function showUser(){
  const username = sessionStorage.getItem("username");
  const avatar = sessionStorage.getItem("avatar");

  if(username && avatar){
    loginBtn.style.display = "none";
    let emoji = "🐱";
    if(avatar=="lion") emoji="🦁";
    if(avatar=="fox") emoji="🦊";
    userArea.innerHTML = `<span>${emoji}</span> ${username}`;
  }
}


showUser();


startButton.addEventListener("click", () => {
  window.location.href = "subjects.html";
});



