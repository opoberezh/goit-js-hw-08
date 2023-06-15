import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// console.log(galleryItems);

const galleryRef = document.querySelector(".gallery");

const makeGalleryCard = galleryItems.map(
    ({preview, original, description}) =>
    `
<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`
);
galleryRef.style.listStyle = 'none';
galleryRef.insertAdjacentHTML("beforeend", makeGalleryCard.join(""));

galleryRef.addEventListener("click", onClick);

new SimpleLightbox(".gallery a", { captionDelay: 250, captionsData: "alt" });

function onClick(evt) {
  evt.preventDefault();
}
