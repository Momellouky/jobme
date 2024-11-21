import axios from "axios";
import skills from "../Skills";

// const webClient = axios.create({
//     baseURL: "http://127.0.0.1:5000",
// })
//
// export default function getPrediction(skills) {
//     return webClient.post("predict_jobs_probs", skills)
// }


class HttpClient {

    static #instance = undefined;
    constructor(BaseURL) {
        this.BaseURL = BaseURL;
        this.webClient = axios.create({baseURL: this.BaseURL})
    }

    static getInstance(BaseURL){
        if(HttpClient.#instance === undefined){
            HttpClient.#instance = new HttpClient(BaseURL);
        }

        return HttpClient.#instance;
    }

    getPrediction(skills){
        /**
         * getPrediction
         *
         * This function sends a POST request to an API endpoint to fetch prediction results based on the provided skills.
         * It utilizes the `webClient` to handle the HTTP request.
         *
         * @param {Array} skills - An array of skills to be sent in the request payload.
         *                          Each skill should be represented as a string.
         *
         * @returns {Promise<Object>} A promise that resolves to the response from the API containing prediction results.
         *
         * ## Behavior:
         * 1. Sends a POST request:
         *    - The `skills` parameter is included in the request payload.
         *    - The endpoint URL is defined by the `this.endPoint` property.
         * 2. Handles the HTTP response:
         *    - The returned promise resolves with the full response from the API.
         *    - Error handling is expected to be managed by the caller.
         *
         * ## Example Usage:
         * ```javascript
         * const skills = ["Machine Learning", "Data Analysis"];
         * getPrediction(skills)
         *     .then(response => {
         *         console.log("API Response:", response);
         *     })
         *     .catch(error => {
         *         console.error("Error in getPrediction:", error);
         *     });
         * ```
         *
         * ## Notes:
         * - Ensure that `this.endPoint` is properly configured with the target API URL.
         * - The `webClient` should be an instance of a suitable HTTP client library (e.g., Axios, Fetch, etc.).
         * - This function assumes the `skills` parameter is correctly formatted before being passed.
         */

        return this.webClient.post(this.endPoint, skills)
    }

}

export default HttpClient