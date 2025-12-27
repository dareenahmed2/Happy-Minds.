const colors = document.querySelectorAll(".color");
const titleText = document.getElementById("titleText");
const resultBox = document.getElementById("resultBox");
const resetBtn = document.getElementById("resetBtn");

let firstColor = null;

colors.forEach(color => {
  color.addEventListener("click", () => {
    if (!firstColor) {
      firstColor = color.dataset.color;
      color.classList.add("hidden");
      titleText.textContent = "Choose another color";
      resultBox.textContent = `${firstColor.toUpperCase()} selected`;
    } else {
      const secondColor = color.dataset.color;
      mixColors(firstColor, secondColor);
    }
  });
});

function mixColors(c1, c2) {
  titleText.textContent = "Mixing Result";

  // كل المزيجات الممكنة بين 8 ألوان
  const mixMap = {
    "red+blue": { text: "Purple 💜", color: "purple" },
    "blue+red": { text: "Purple 💜", color: "purple" },
    "red+yellow": { text: "Orange 🧡", color: "orange" },
    "yellow+red": { text: "Orange 🧡", color: "orange" },
    "blue+yellow": { text: "Green 💚", color: "green" },
    "yellow+blue": { text: "Green 💚", color: "green" },
    "red+green": { text: "Brown 🤎", color: "#8B4513" },
    "green+red": { text: "Brown 🤎", color: "#8B4513" },
    "red+orange": { text: "Red-Orange 🔴🧡", color: "#ff5500" },
    "orange+red": { text: "Red-Orange 🔴🧡", color: "#ff5500" },
    "red+purple": { text: "Magenta 💖", color: "#ff00ff" },
    "purple+red": { text: "Magenta 💖", color: "#ff00ff" },
    "red+pink": { text: "Rose 🌹", color: "#ff3366" },
    "pink+red": { text: "Rose 🌹", color: "#ff3366" },
    "red+cyan": { text: "Violet 🔮", color: "#8a2be2" },
    "cyan+red": { text: "Violet 🔮", color: "#8a2be2" },

    "blue+green": { text: "Teal 🌀", color: "#008080" },
    "green+blue": { text: "Teal 🌀", color: "#008080" },
    "blue+orange": { text: "Brown 🤎", color: "#a0522d" },
    "orange+blue": { text: "Brown 🤎", color: "#a0522d" },
    "blue+purple": { text: "Indigo 🔷", color: "#4b0082" },
    "purple+blue": { text: "Indigo 🔷", color: "#4b0082" },
    "blue+pink": { text: "Lavender 💜", color: "#e6e6fa" },
    "pink+blue": { text: "Lavender 💜", color: "#e6e6fa" },
    "blue+cyan": { text: "Sky Blue ☁️", color: "#00bfff" },
    "cyan+blue": { text: "Sky Blue ☁️", color: "#00bfff" },

    "yellow+green": { text: "Lime 💚", color: "#bfff00" },
    "green+yellow": { text: "Lime 💚", color: "#bfff00" },
    "yellow+orange": { text: "Gold 🟡", color: "#ffd700" },
    "orange+yellow": { text: "Gold 🟡", color: "#ffd700" },
    "yellow+purple": { text: "Light Brown 🌰", color: "#a67c52" },
    "purple+yellow": { text: "Light Brown 🌰", color: "#a67c52" },
    "yellow+pink": { text: "Peach 🍑", color: "#ffcc99" },
    "pink+yellow": { text: "Peach 🍑", color: "#ffcc99" },
    "yellow+cyan": { text: "Lime-Cyan 💛", color: "#99ffcc" },
    "cyan+yellow": { text: "Lime-Cyan 💛", color: "#99ffcc" },

    "green+orange": { text: "Olive 🫒", color: "#808000" },
    "orange+green": { text: "Olive 🫒", color: "#808000" },
    "green+purple": { text: "Forest 🌲", color: "#228b22" },
    "purple+green": { text: "Forest 🌲", color: "#228b22" },
    "green+pink": { text: "Mint 🌿", color: "#99ffcc" },
    "pink+green": { text: "Mint 🌿", color: "#99ffcc" },
    "green+cyan": { text: "Sea Green 🌊", color: "#2e8b57" },
    "cyan+green": { text: "Sea Green 🌊", color: "#2e8b57" },

    "orange+purple": { text: "Magenta-Orange 💖", color: "#ff3399" },
    "purple+orange": { text: "Magenta-Orange 💖", color: "#ff3399" },
    "orange+pink": { text: "Coral 🧡", color: "#ff7f50" },
    "pink+orange": { text: "Coral 🧡", color: "#ff7f50" },
    "orange+cyan": { text: "Turquoise 🟦", color: "#40e0d0" },
    "cyan+orange": { text: "Turquoise 🟦", color: "#40e0d0" },

    "purple+pink": { text: "Orchid 🌸", color: "#da70d6" },
    "pink+purple": { text: "Orchid 🌸", color: "#da70d6" },
    "purple+cyan": { text: "Blue-Violet 🔷", color: "#8a2be2" },
    "cyan+purple": { text: "Blue-Violet 🔷", color: "#8a2be2" },

    "pink+cyan": { text: "Pastel 💗", color: "#ffb6c1" },
    "cyan+pink": { text: "Pastel 💗", color: "#ffb6c1" }
  };

  const key = `${c1}+${c2}`;
  const result = mixMap[key];

  resultBox.textContent = result.text;
  resultBox.style.background = result.color;
  resultBox.style.color = "white";
}

resetBtn.addEventListener("click", () => {
  firstColor = null;
  titleText.textContent = "Choose two colors";
  resultBox.textContent = "Waiting for colors...";
  resultBox.style.background = "#f3f3ff";
  resultBox.style.color = "#000";
  colors.forEach(c => c.classList.remove("hidden"));
});
