import { galleryItems } from "./gallery-items.js";
// import * as basicLightbox from "basiclightbox";

// Change code below this line
const gallery = document.querySelector(".gallery");

const createGallery = () => {
	const markup = galleryItems
		.map(
			({ preview, original, description }) =>
				`<div class="gallery__item">
    <a class="gallery__link" href= ${original}>
      <img
        class="gallery__image"
        src=${preview}
        data-source=${original}
        alt=${description}
      />
    </a>
  </div>`,
		)
		.join("");
	gallery.insertAdjacentHTML("beforeend", markup);
};
createGallery();

const openImage = (e) => {
	if (e.target.nodeName !== "IMG") {
		console.log(e.target.nodeName);
		return;
	}
	e.preventDefault();
	console.log(e.target.dataset.source);
	basicLightbox.create(`<img src=${e.target.dataset.source}>`).show();
};
gallery.addEventListener("click", openImage);
