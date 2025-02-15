import { requestData } from "./js/pixabay-api";
import { list, renderGallery } from "./js/render-function";

const refs = {
    form: document.querySelector('.form'),
}
const { form } = refs;

export let inputData;
form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    list.innerHTML = "";
    inputData = form.elements.image.value.trim();
    if (inputData === "") {
        return;
    }
    requestData().then(value => renderGallery(value));
    form.reset();
})