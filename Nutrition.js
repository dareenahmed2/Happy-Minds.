const foods = {
  "Apple": {
    img: "https://i.pinimg.com/736x/84/ca/00/84ca001f24fc350f92966bd6bd3d980f.jpg",
    desc: "Apples are healthy! They give you vitamins and fiber to keep your body strong."
  },
  "Chocolate": {
    img: "https://i.pinimg.com/736x/fc/74/22/fc7422dca0d96edf65078e593780d528.jpg",
    desc: "Chocolate is tasty but not very healthy. Eat it only sometimes!"
  },
  "Milk": {
    img: "https://i.pinimg.com/736x/d4/cd/cc/d4cdcc1ba873448b61da3c39a6cab3ab.jpg",
    desc: "Milk is healthy! It helps your bones grow strong because it has calcium."
  },
  "Carrot": {
    img: "https://i.pinimg.com/736x/12/9c/96/129c961d68afd5ae081e76c8c493a73a.jpg",
    desc: "Carrots are healthy! They help your eyes see better and keep you strong."
  },
  "Burger": {
    img: "https://i.pinimg.com/736x/ad/fe/d5/adfed51b90914a4c1818352ad6fe4bae.jpg",
    desc: "Burgers are tasty but not very healthy. Eat them only sometimes!"
  },
  "Banana": {
    img: "https://i.pinimg.com/736x/f7/27/01/f7270152e4301ef9c3798dbf8c30d95c.jpg",
    desc: "Bananas are healthy! They give you energy and important vitamins."
  }
};

const foodElements = document.querySelectorAll('.food');
const resultContainer = document.querySelector('.result');
const foodImg = document.getElementById('food-img');
const foodName = document.getElementById('food-name');
const foodDesc = document.getElementById('food-desc');

foodElements.forEach(food => {
  food.addEventListener('click', () => {
    const name = food.getAttribute('data-name');
    foodImg.src = foods[name].img;
    foodName.textContent = name;
    foodDesc.textContent = foods[name].desc;
    resultContainer.style.display = 'flex';
  });
});
