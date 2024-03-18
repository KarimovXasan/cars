const img = document.getElementById("img");
const car = document.querySelector(".car")

const red = document.querySelector(".red")
const black = document.querySelector(".black")
const grey = document.querySelector(".grey")
const addToCard = document.querySelector(".add-to-card")

red.addEventListener("click", function(){
  car.style.backgroundColor = "red";
  img.style.backgroundImage = "url('./car.webp')"
  addToCard.style.backgroundColor = "red";
})

black.addEventListener("click", function(){
  car.style.backgroundColor = "black";
  img.style.backgroundImage = "url('./black.webp')"
  addToCard.style.backgroundColor = "black";
})

grey.addEventListener("click", function(){
  car.style.backgroundColor = "grey";
  img.style.backgroundImage = "url('./grey.webp')"
  addToCard.style.backgroundColor = "grey";
})