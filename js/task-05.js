// const inputEl = document.querySelector("#name-input");
// const outputEl = document.querySelector("#name-output");

const refs = {
  inputEl: document.querySelector("#name-input"),
  outputEl: document.querySelector("#name-output"),
};
console.log(refs.outputEl);
console.log(refs.inputEl);

refs.inputEl.addEventListener("input", onInputChange);

function onInputChange(event) {
  console.log(event.currentTarget.value);
  //   refs.outputEl.textContent = event.currentTarget.value || "Anonymous";

  event.currentTarget.value === ""
    ? (refs.outputEl.textContent = "Anonymous")
    : (refs.outputEl.textContent = event.currentTarget.value);
}

// refs.inputEl.addEventListener("focus", (event) => {
//   console.log("Инпут получил фокус");
// });
// refs.inputEl.addEventListener("blur", (event) => {
//   console.log("Инпут потерял фокус");
// });

// refs.inputEl.addEventListener("change", onInputChange);
// function onInputChange(event) {
//   console.log(event);
// }
