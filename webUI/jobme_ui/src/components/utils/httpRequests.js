import axios from "axios";
import skills from "../Skills";


export default function getPrediction(skills) {
    return axios.post(URL="127.0.0.1:8000", skills)
}