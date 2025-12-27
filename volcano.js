const elements = document.querySelectorAll(".element");
const titleText = document.getElementById("titleText");
const reactionBox = document.getElementById("reactionBox");
const resetBtn = document.getElementById("resetBtn");

let firstElement = null;

elements.forEach(el => {
  el.addEventListener("click", () => {

    if (!firstElement) {
      firstElement = el.dataset.element;
      el.classList.add("hidden");
      titleText.textContent = "Choose another element";
      reactionBox.textContent = `${firstElement} selected`;
    } else {
      const secondElement = el.dataset.element;
      showReaction(firstElement, secondElement);
    }

  });
});

function showReaction(e1, e2) {
  titleText.textContent = "Reaction Result";

  let result = "";

  if (
    (e1 === "Fire" && e2 === "Water") ||
    (e1 === "Water" && e2 === "Fire")
  ) {
    result = "🔥 + 💧 = Steam ☁️";
  } 
  else if (
    (e1 === "Fire" && e2 === "Nature") ||
    (e1 === "Nature" && e2 === "Fire")
  ) {
    result = "🔥 + 🌱 = Ash 🌫️";
  } 
  else if (
    (e1 === "Water" && e2 === "Nature") ||
    (e1 === "Nature" && e2 === "Water")
  ) {
    result = "💧 + 🌱 = Growth 🌸";
  } 
  else {
    result = "New mysterious reaction ✨";
  }

  reactionBox.textContent = result;
}

resetBtn.addEventListener("click", () => {
  firstElement = null;
  titleText.textContent = "Choose two elements";
  reactionBox.textContent = "Waiting for elements...";
  elements.forEach(el => el.classList.remove("hidden"));
});
