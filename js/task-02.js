const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.querySelector("ul#ingredients");

// ingredients.forEach(function (element) {
//   const titleEl = document.createElement("li");
//   titleEl.classList.add("item");
//   titleEl.textContent = `${element}`;
//   console.log(titleEl);
//   listEl.appendChild(titleEl);
// });

const makeIngredientsList = ingredients.map((element) => {
  const titleEl = document.createElement("li");
  titleEl.classList.add("item");
  titleEl.textContent = `${element}`;
  return titleEl;
});

listEl.append(...makeIngredientsList);
console.log(listEl);
