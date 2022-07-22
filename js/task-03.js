const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const listImgEl = document.querySelector("ul.gallery");
console.log(listImgEl);

const imagesEl = images.map((image) => {
  const itemImgEl = document.createElement("li");

  const linkImgEl = document.createElement("img");

  linkImgEl.classList.add("gallery-list");
  linkImgEl.setAttribute("src", `${image.url}`);
  linkImgEl.setAttribute("alt", `${image.alt}`);

  itemImgEl.appendChild(linkImgEl);

  console.log(itemImgEl);
});

// const totalScore = students.reduce((total, student) => {
//   return total + student.score;
// }, 0);
