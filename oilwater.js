const stomata = document.getElementById("stomata");
const roots = document.getElementById("roots");
const waterBtn = document.getElementById("waterBtn");
const feedback = document.querySelector(".feedback");
const waterflow = document.getElementById("waterflow");

let waterLevel = 0;

roots.addEventListener("click", () => {
  feedback.textContent = "Roots absorb water from the soil! 🌱";
  feedback.style.color = "brown";
  roots.style.transform = "scale(1.3)";
  setTimeout(() => roots.style.transform = "scale(1)", 500);
  waterLevel += 1;
  waterflow.style.display = "block";
});

stomata.addEventListener("click", () => {
  if(waterLevel > 0){
    feedback.textContent = "Water travels up to leaves! Photosynthesis happens! 🌞";
    feedback.style.color = "green";
    stomata.style.background = "lime";
  } else {
    feedback.textContent = "The plant needs water first! 💧";
    feedback.style.color = "blue";
  }
});

waterBtn.addEventListener("click", () => {
  waterLevel += 2;
  feedback.textContent = "You watered the plant! Roots are full of water! 💦";
  feedback.style.color = "#1e90ff";
  waterflow.style.display = "block";
});
