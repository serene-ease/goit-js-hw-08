import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';


const galleryElelement = document.querySelector(".gallery");
const galleryMarkup = galleryItems.map(({ preview, original, description }) => {
    return `<a class="gallery__link" href=${original}>
    <img
      class="gallery__image"
      src=${preview}      
      alt=${description}
    />
  </a>`
}).join("");

galleryElelement.insertAdjacentHTML("afterbegin", galleryMarkup);

let lightbox = new SimpleLightbox('.gallery a', { captionsData: "alt", captionPosition: "bottom", captionDelay: 250 });