function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const spanColorEl = document.querySelector(".color");
const btnChangeColorEl = document.querySelector(".change-color");

btnChangeColorEl.addEventListener("click", onChangeColor);

function onChangeColor(event) {
  const newColor = getRandomHexColor();
  spanColorEl.textContent = newColor;
  document.body.style.backgroundColor = newColor;
}
