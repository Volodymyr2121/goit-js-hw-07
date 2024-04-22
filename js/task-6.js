function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector('#controls');
const input = controls.querySelector('input');
const buttonCreate = controls.querySelector('[data-create]');
const buttonDestroy = controls.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes')
 

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    const boxSize = 30 + i * 10;
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();

    boxes.append(box);
  }
  
}

  function destroyBoxes() {
    boxes.innerHTML = '';
  }

buttonCreate.addEventListener('click', (event) => {
  const amount = Number(input.value);
  if (amount >= 1 && amount   <= 100) {
    createBoxes(amount);
    input.value = "";
  } else {
    return;
  }
  
})
buttonDestroy.addEventListener('click', destroyBoxes);
 boxes.classList.add('box-list')