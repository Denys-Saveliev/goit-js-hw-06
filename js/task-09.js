const spanNameColor = document.querySelector('.color');
const btnPushToChangeColor = document.querySelector('.change-color');

btnPushToChangeColor.addEventListener('click', onBtnPushChangeColor);

function onBtnPushChangeColor(event) {
   const newColor = getRandomHexColor();
   document.body.style.backgroundColor = newColor;
   spanNameColor.textContent = newColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}