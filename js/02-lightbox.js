import { galleryItems } from "./gallery-items.js";
// Change code below this line
const listEl = document.querySelector(".gallery");

const markupGallery = galleryItems
  .map(({ preview, original, description }) => {
    return `<li class='gallery__item'><a class='gallery__link' href='${original}'><img class='gallery__image' src='${preview}' data-source='${original}' alt='${description}'></a></li>`;
  })
  .join("");

listEl.insertAdjacentHTML("beforeend", markupGallery);

listEl.addEventListener("click", onOpenModal);

function onOpenModal(event) {
  event.preventDefault();

  const currentItem = event.target;

  if (currentItem.nodeName !== "IMG") {
    return;
  }

  const lightbox = new SimpleLightbox(".gallery .gallery__link", {
    captionsData: "alt",
    captionDelay: 250,
  });

  lightbox.open();
  window.addEventListener("keydown", onCloseModal);
}

function onCloseModal(event) {
  const openEl = document.querySelector(".basicLightbox");
  if (event.code === "Escape") {
    openEl.remove();
  }
  window.removeEventListener("keydown", onCloseModal);
}

console.log(galleryItems);
