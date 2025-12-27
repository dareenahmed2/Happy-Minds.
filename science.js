const voice = document.getElementById("voice");

window.addEventListener("load", () => {
  voice.play().catch(() => {
    console.log("Audio autoplay blocked");
  });
});
