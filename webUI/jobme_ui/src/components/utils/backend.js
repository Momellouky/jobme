import getPrediction from "./httpRequests";
import skills from "../Skills";


class Backend {
    constructor () {
        this.prediction = undefined;
    }

    makePrediction(skills) {



        return new Promise((resolve, reject) => {

            if(skills === undefined || skills === null || skills.length === 0){
                alert("Select at least one skill")
                return {}
            }

            if(skills.length > 90){
                alert("An issue raises. There is a maximum of 90 skills. More than 90 were found! ")
                return {}
            }
            getPrediction(skills).then(response => {
                this.prediction = response.data;
                resolve(response.data)

            }).catch(error => {
                console.log(error)
                reject(error)
                alert("The service is unavailable at the moment. We are fixing the issue.")
            })
        })

    }

    update() {
        console.log("update function" , this.prediction)
    }


}

export default Backend