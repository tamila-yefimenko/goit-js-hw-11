import axios from "axios";
import { inputData } from "../main";
import "pace-js";
import "../css/animations.css";

const instance = axios.create({
    baseURL: 'https://pixabay.com',
    });
export async function requestData() {
    try {
        Pace.start();
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
    } finally {
        Pace.stop();
    }
};