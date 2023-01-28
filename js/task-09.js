const changeColorBtn = document.querySelector('.change-color');
const body = document.querySelector('body');
const colorName = document.querySelector('.color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6,0)}`;
}

changeColorBtn.addEventListener('click', () => {
body.style.backgroundColor = getRandomHexColor();
colorName.textContent = body.style.backgroundColor
})
