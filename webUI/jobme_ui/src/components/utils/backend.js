import skills from "../Skills";
import HttpClient from "./httpClient";


class Backend {

    static #instance = undefined;

    constructor(RouteInfo) {
        this.httpClient = HttpClient.getInstance(RouteInfo);
    }

    static getInstance(RouteInfo) {

        if(Backend.#instance === undefined){
            Backend.#instance = new Backend(RouteInfo);
        }

        return Backend.#instance;

    }

    makePrediction(skills) {

        /**
         * makePrediction
         *
         * This function is responsible for making predictions based on a list of skills.
         * It interacts with an external service using an HTTP client to fetch prediction results.
         * If the skills input is invalid or the service call fails, appropriate error handling is performed.
         *
         * @param {Array} skills - An array of skills for which predictions need to be made.
         *                          Each skill should be represented as a string.
         *
         * @returns {Promise<Object>} A promise that resolves to the prediction results fetched from the HTTP client.
         *
         * @throws Will reject with an error object if the HTTP request fails or the service is unavailable.
         *
         * ## Behavior:
         * 1. Validates the `skills` input:
         *    - If `skills` is undefined, null, or an empty array, an alert is displayed to inform the user.
         *    - An empty object `{}` is returned immediately in such cases.
         * 2. Makes an HTTP GET request using `this.httpClient.getPrediction(skills)`:
         *    - Resolves the promise with the data from the response on success.
         *    - Logs the error, rejects the promise, and displays an alert if the request fails.
         *
         * ## Example Usage:
         * ```javascript
         * const skills = ["JavaScript", "Python"];
         * makePrediction(skills)
         *     .then(data => {
         *         console.log("Prediction Results:", data);
         *     })
         *     .catch(error => {
         *         console.error("Prediction failed:", error);
         *     });
         * ```
         *
         * ## Alerts:
         * - If no skills are selected: "Select at least one skill".
         * - If the service is unavailable: "The service is unavailable at the moment. We are fixing the issue."
         */


        return new Promise((resolve, reject) => {

            if(skills === undefined || skills === null || skills.length === 0){
                alert("Select at least one skill")
                return {}
            }

            this.httpClient.getPrediction(skills).then(response => {
                resolve(response.data)

            }).catch(error => {
                console.log(error)
                reject(error)
                alert("The service is unavailable at the moment. We are fixing the issue.")
            })
        })

    }




}

export default Backend