const refs = {
changeColorBtn: document.querySelector('.change-color'),
body: document.querySelector('body'),
colorName: document.querySelector('.color')
}

refs.changeColorBtn.addEventListener('click', () => {
  refs.body.style.backgroundColor = getRandomHexColor();
  refs.colorName.textContent = refs.body.style.backgroundColor
})

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6,0)}`;
}