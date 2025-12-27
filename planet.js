// Interactive tooltips and click alerts
const sun = document.getElementById("sun");
const earth = document.getElementById("earth");
const moon = document.getElementById("moon");

sun.addEventListener("click", () => {
  alert("The Sun ☀️ is the center of the solar system. It gives us light and heat!");
});

earth.addEventListener("click", () => {
  alert("Earth 🌍 rotates around the Sun every 365 days and spins on its axis every 24 hours.");
});

moon.addEventListener("click", () => {
  alert("The Moon 🌙 revolves around the Earth approximately every 27 days due to gravity.");
});
