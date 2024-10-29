import axios from "axios";
import skills from "../Skills";

const webClient = axios.create({
    baseURL: "http://127.0.0.1:5000",
})

export default function getPrediction(skills) {
    return webClient.post("predict_jobs_probs", skills)
}