const inputSymbolEl = document.querySelector("#validation-input");
console.log(inputSymbolEl);

inputSymbolEl.addEventListener("blur", onChangesColorBorder);

function onChangesColorBorder(event) {
  event.preventDefault();
  if (
    event.currentTarget.value.length === Number(inputSymbolEl.dataset.length)
  ) {
    inputSymbolEl.classList.remove("invalid");
    inputSymbolEl.classList.add("valid");
  } else {
    inputSymbolEl.classList.remove("valid");
    inputSymbolEl.classList.add("invalid");
  }
}
