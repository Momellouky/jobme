import getPrediction from "./httpRequests";
import skills from "../Skills";
import httpRequests from "./httpRequests";


class Backend {

    constructor(port, baseURL) {
        this.port = port
        this.baseURL = baseURL
        this.httpRequests = new httpRequests(this.port, this.baseURL)
    }



    makePrediction(skills, source) {



        return new Promise((resolve, reject) => {

            if(skills === undefined || skills === null || skills.length === 0){
                alert("Select at least one skill")
                return {}
            }

            if(source === "llama"){
                this.port = 8080
            }else{
                this.port = 5000
            }

            this.httpRequests.getPrediction(skills).then(response => {
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