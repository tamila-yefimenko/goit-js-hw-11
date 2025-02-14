import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

export const list = document.querySelector('.gallery');

export const renderGallery = (value) => {
    console.log(value.hits);
    const imageMarkUp = value.hits.map((hit) => {
        console.log("Iteration");
        const { largeImageURL, webformatURL, tags, likes, views, comments, downloads } = hit;
        return `<li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
            <img
                class="gallery-image"
                src="${webformatURL}"
                alt="${tags}"
            />
        </a>
        <ul class="wrapper">
            <li class="likes">Likes ${likes}</li>
            <li class="views">Views ${views}</li>
            <li class="comments">Comments ${comments}</li>
            <li class="downloads">Downloads ${downloads}</li>
        </ul>
    </li>`
    }).join("");

    list.insertAdjacentHTML("beforeend", imageMarkUp);
}

// new SimpleLightbox('.gallery-item a', { captionsData: 'alt', captionDelay: 250});