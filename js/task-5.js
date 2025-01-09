function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const spanColor = document.querySelector('.color');
const changeButtonColor = document.querySelector('.change-color');

changeButtonColor.addEventListener('click', event => {
  document.body.style.backgroundColor = getRandomHexColor();
  spanColor.textContent = getRandomHexColor();
})


