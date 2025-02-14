import axios from "axios";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { list, renderGallery } from "./render-function";

const refs = {
    form: document.querySelector('.form'),
    button: document.querySelector('.form-button'),
}
const { form, button } = refs;

let inputData;
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

const instance = axios.create({
    baseURL: 'https://pixabay.com',
    });
export async function requestData() {
    try {
        const response = await instance.get("/api", {
            params: {
                key: "48823669-6a3dc21720ce29a0e321c0b37",
                q: `${inputData}`,
                image_type: "photo",
                orientation: "horizontal",
                safesearch: "true",
            }
        });
        return response.data;
    } catch (error) {
        console.log(error);
        iziToast.error({
            title: 'Error',
            message: 'Sorry, there are no images matching your search query. Please try again!',
            messageColor: '#fff',
            titleSize: '16px',
            backgroundColor: '#ef4040',
            position: 'topRight',
            titleColor: '#fff',
            theme: 'dark',
        });
    }
};