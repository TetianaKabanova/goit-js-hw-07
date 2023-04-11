import { galleryItems } from "./gallery-items.js";
// Change code below this line
const listEl = document.querySelector(".gallery");

const markupGallery = galleryItems
  .map(({ preview, original, description }) => {
    return `<li class='gallery__item'><a class='gallery__link' href='${original}'><img class='gallery__image' src='${preview}' data-source='${original}' alt='${description}'></a></li>`;
  })
  .join("");

listEl.insertAdjacentHTML("beforeend", markupGallery);

const lightbox = new SimpleLightbox(".gallery .gallery__link", {
  captionsData: "alt",
  captionDelay: 250,
});
