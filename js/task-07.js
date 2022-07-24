const inputSizeControlEl = document.querySelector("#font-size-control");
const textEl = document.getElementById("text");
console.log(inputSizeControlEl);
console.log(textEl);

// inputSizeControlEl.oninput = function () {
//   textEl.style.fontSize = inputSizeControlEl.value + "px";
// };
inputSizeControlEl.addEventListener("input", onChangesSizeControl);

function onChangesSizeControl(event) {
  textEl.style.fontSize = event.currentTarget.value + "px";
}

// function onChangesSizeControl() {
//   textEl.style.fontSize = inputSizeControlEl.value + "px";
// }
