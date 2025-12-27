const bodyParts = {
  "Lungs": {
    img: "https://i.pinimg.com/736x/c5/38/b2/c538b26c937d8d2231982d66fbf24ee4.jpg",
    desc: "The lungs help you breathe! They take in oxygen from the air and remove carbon dioxide."
  },
  "Heart": {
    img: "https://i.pinimg.com/736x/80/b0/af/80b0af34b9fb587fcf633b28565c9be3.jpg",
    desc: "The heart pumps blood all around your body to keep you alive and healthy."
  },
  "Brain": {
    img: "https://i.pinimg.com/736x/07/fb/8a/07fb8a0ecf6d049f52e9e23e181f5cec.jpg",
    desc: "The brain helps you think, learn, and control your body."
  },
  "Stomach": {
    img: "https://i.pinimg.com/736x/4d/60/d4/4d60d47c14cfdaeb3cb93973689d4bbc.jpg",
    desc: "The stomach helps digest the food you eat into energy for your body."
  }
};

const bodyPartElements = document.querySelectorAll('.body-part');
const exploreContainer = document.querySelector('.explore-container');
const exploreImg = document.getElementById('explore-img');
const exploreName = document.getElementById('explore-name');
const exploreDesc = document.getElementById('explore-desc');

bodyPartElements.forEach(part => {
  part.addEventListener('click', () => {
    const name = part.getAttribute('data-name');
    exploreImg.src = bodyParts[name].img;
    exploreName.textContent = name;
    exploreDesc.textContent = bodyParts[name].desc;
    exploreContainer.style.display = 'flex';
  });
});
