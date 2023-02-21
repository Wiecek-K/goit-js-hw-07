import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const createGallery = () => {
	const markup = galleryItems
		.map(
			({ preview, original, description }) =>
				`<a class="gallery__item" href= ${original}>
                <img
                    class="gallery__image"
                    src=${preview}
                    alt=${description}
                />
                </a>`,
		)
		.join("");
	gallery.insertAdjacentHTML("beforeend", markup);
};
createGallery();
let galleryLightBox = new SimpleLightbox(".gallery a", {
	showCounter: false,
	captions: true,
	captionsData: "alt",
	captionDelay: 250,
});
galleryLightBox.on("shown.simplelightbox", function () {
	const caption = document.querySelector(".sl-caption.pos-bottom");
	caption.style.textAlign = "center";
});
