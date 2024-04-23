function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const spanColor = document.querySelector('.color');
const changeButtonColor = document.querySelector('.change-color');

changeButtonColor.addEventListener('click', event => {
  const startFn = getRandomHexColor();
  document.body.style.backgroundColor = startFn;
  spanColor.textContent = startFn;
})