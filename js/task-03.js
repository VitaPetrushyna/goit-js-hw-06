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

// const imagesEl = images.map((image) => {
//   const itemImgEl = document.createElement("li");

//   const linkImgEl = document.createElement("img");

//   linkImgEl.classList.add("gallery-list");
//   linkImgEl.setAttribute("src", `${image.url}`);
//   linkImgEl.setAttribute("alt", `${image.alt}`);
//   linkImgEl.width = 640;

//   itemImgEl.appendChild(linkImgEl);

//   const listImgEl = document.querySelector("ul.gallery");
//   listImgEl.appendChild(itemImgEl);
//   console.log(listImgEl);
// });

// const listImgEl = document.querySelector("ul.gallery");
// const itemImgEl = ({ url, alt }) => {
//   return `<li><img class="gallery-list" src = ${url} alt = ${alt} width = 640 heigth = 640></li>`;
// };
// const makeGalleryImg = images.map(itemImgEl).join("");
// console.log(makeGalleryImg);
// listImgEl.insertAdjacentHTML("afterbegin", makeGalleryImg);
// listImgEl.setAttribute(
//   "style",
//   "list-style-type: none; display: flex; justify-content: space-between;  align-items: stretch;"
// );

const listImgEl = document.querySelector("ul.gallery");

const makeGalleryImg = images
  .map(({ url, alt }) => {
    return `<li><img class="gallery-list" src = ${url} alt = ${alt} width = 640 heigth = 640></li>`;
  })
  .join("");

listImgEl.insertAdjacentHTML("afterbegin", makeGalleryImg);

listImgEl.setAttribute(
  "style",
  "list-style-type: none; display: flex; justify-content: space-between;  align-items: stretch;"
);
console.log(makeGalleryImg);
