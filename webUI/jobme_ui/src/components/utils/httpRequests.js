import axios from "axios";


 class httpRequests {

    constructor(port, baseURL) {
        this.port = port
        this.baseURL = baseURL + port
        this.webClient = axios.create({
            baseURL: baseURL,
        })

        this.endpoint = this.baseURL + "/predict_jobs_probs"

        if(this.port === 8080){
            this.endpoint = this.baseURL + "/api/prediction/jobs"
        }
    }  

    getPrediction(skills) {
        return this.webClient.post(this.endpoint, skills)
    }

}


export default httpRequests