const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.querySelector("ul#ingredients");
console.log(listEl);

ingredients.forEach(function (element) {
  const titleEl = document.createElement("li");
  titleEl.classList.add("item");
  titleEl.textContent = `${element}`;
  console.log(titleEl);
  listEl.appendChild(titleEl);
});
