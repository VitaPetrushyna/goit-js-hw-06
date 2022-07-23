const spanEl = document.querySelector("#value");
const decrementBtnEl = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementBtnEl = document.querySelector(
  'button[data-action="increment"]'
);
console.log(decrementBtnEl);
console.log(incrementBtnEl);
let counterValue = 0;

decrementBtnEl.addEventListener("click", (event) => {
  counterValue -= 1;
  spanEl.textContent = counterValue;
});

incrementBtnEl.addEventListener("click", (event) => {
  counterValue += 1;
  spanEl.textContent = counterValue;
});
