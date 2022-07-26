function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  inputEl: document.querySelector("#controls>input"),
  buttonCreateEl: document.querySelector("button[data-create]"),
  buttonDestroyEl: document.querySelector("button[data-destroy]"),
  divBuildEl: document.querySelector("#boxes"),
};

console.log(refs.inputEl);
console.log(refs.buttonCreateEl);
console.log(refs.buttonDestroyEl);
console.log(refs.divBuildEl);

function createBoxes(amount) {
  const arrayElements = [];
  for (let i = 0; i < amount; i += 1) {
    const divSize = document.createElement("div");
    divSize.style.height = `${30 + 10 * i}px`;
    divSize.style.width = `${30 + 10 * i}px`;
    divSize.style.background = getRandomHexColor();
    arrayElements.push(divSize);
  }
  return arrayElements;
}

function destroyBoxes() {
  refs.divBuildEl.innerHTML = "";
}

refs.buttonCreateEl.addEventListener("click", () => {
  let amountBoxes = createBoxes(refs.inputEl.value);
  refs.divBuildEl.append(...amountBoxes);
});

console.log(refs.inputEl.value);

refs.buttonDestroyEl.addEventListener("click", destroyBoxes);

// const inputNum = document.querySelector("#controls>input");
// const btnCreate = document.querySelector("button[data-create]");
// const btnDestroy = document.querySelector("button[data-destroy]");
// const boxes = document.querySelector("#boxes");

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// const createBoxes = (amount) => {
//   const elementsToAdd = [];
//   for (let i = 0; i < amount; i++) {
//     const div = document.createElement("div");
//     div.style.height = `${30 + 10 * i}px`;
//     div.style.width = `${30 + 10 * i}px`;
//     div.style.background = getRandomHexColor();
//     elementsToAdd.push(div);
//   }
//   return elementsToAdd;
// };

// const destroyBoxes = () => {
//   boxes.innerHTML = "";
// };

// btnCreate.addEventListener("click", () => {
//   let boxesToAdd = createBoxes(inputNum.value);
//   boxes.append(...boxesToAdd);
// });

// console.log(inputNum.value);

// btnDestroy.addEventListener("click", () => {
//   destroyBoxes.call();
// });
