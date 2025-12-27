const chooseSound = document.getElementById("chooseSound");
const cards = document.querySelectorAll(".card");

cards.forEach(card=>{
  card.addEventListener("click", ()=>{
    chooseSound.play();
  });
});
