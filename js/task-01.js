const listEl = document.querySelectorAll(".item");
console.log(listEl);
const message = listEl.length;
console.log(`Number of categories: ${message}`);

listEl.forEach(function (element) {
  console.log(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Elements: ${element.lastElementChild.children.length}`);
});
