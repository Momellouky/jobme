import {type} from "@testing-library/user-event/dist/type";

class Gateway {

    static #instance = undefined;

    constructor() {

        this.endPoints = {
            "8080" : "api/prediction/jobs",
            "5000" : "predict_jobs_probs"
        };

    }

    static getInstance() {

        if(Gateway.#instance === undefined){
            Gateway.#instance = new Gateway();
        }

        return Gateway.#instance;

    }

    routeRequest(portNumber){

        /**
         * routeRequest
         *
         * This function constructs a URI to route an HTTP request to a specific endpoint based on the provided port number.
         * It validates the port number and dynamically generates the URI using the IP address and endpoint information.
         *
         * @param {string} portNumber - A 4-character string representing the port number to route the request.
         *
         * @returns {string} The full URI constructed using the IP address, port number, and endpoint.
         *                   If the port number is invalid, an empty string is returned.
         *
         * ## Behavior:
         * 1. **Validation**:
         *    - Ensures `portNumber` is defined and exactly 4 characters long.
         *    - If validation fails, an alert is displayed:
         *      "An issue with the HTTP call raises. Please retry again later."
         *      An empty string (`""`) is returned in such cases.
         *
         * 2. **URI Construction**:
         *    - Retrieves the IP address by calling `this.getIpAdress()`.
         *    - Constructs the URI in the format:
         *      `<IP address><portNumber>/<endpoint>`
         *    - The endpoint is dynamically retrieved from `this.endPoints` using the port number as a key.
         *
         * ## Example Usage:
         * ```javascript
         * const portNumber = "8080";
         * const uri = routeRequest(portNumber);
         * console.log("Generated URI:", uri);
         *
         * // Example output:
         * // "http://192.168.1.1:8080/someEndpoint"
         * ```
         *
         * ## Notes:
         * - Ensure `this.getIpAdress()` is implemented to return the correct IP address as a string.
         * - `this.endPoints` should be an object where keys are port numbers and values are endpoint paths.
         * - If `portNumber` is invalid or missing in `this.endPoints`, the function returns an empty string.
         *
         * ## Alerts:
         * - If the port number is invalid:
         *   "An issue with the HTTP call raises. Please retry again later."
         */


        if(portNumber === undefined || portNumber.toString().length != 4){
            alert("An issue with the HTTP call raises. Please retry again later.");
            return "";
        }

        const URI = this.getIpAdress() + portNumber;
        return {
            "BaseURL" : this.getIpAdress() + portNumber + "/",
            "EndPoint" : this.endPoints[portNumber]
        }
    }

    getIpAdress(){
        return "http://127.0.0.1:";
    }

}

export default Gateway;