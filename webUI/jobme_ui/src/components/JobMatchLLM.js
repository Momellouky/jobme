import React, { Component } from 'react'
import Backend  from './utils/backend'
import BarChart from './BarChart';
import { useState } from 'react';
import Gateway from "./utils/Gateway";

export default function JobMatchLLM() {
  
    const gateway = Gateway.getInstance();
    const backend = Backend.getInstance(
        gateway.routeRequest(8080)
    )
    const [predictions, setPredictions] = useState({})

    const handleSubmit = () => {    
        
        const skills = document.getElementById("skills").value
        console.log("Skills: " + skills)

        
        backend.makePrediction(skills).then((result) => {
            setPredictions(result)
            console.log("Predictions made: " + result)
        }).catch((error) => {
            console.log(error)
        })
    }

    return (
        <div className='align-items-center m-5'>
            <form>
                <div className="form-group">
                <label className="mb-3" for="skills">Type all your skills: </label>
                <input type="text" class="form-control" id="skills" aria-describedby="emailHelp" placeholder="Python, C++, JAVA, Machine Learning, Design Patterns ..." />
                </div>
                <button onClick={handleSubmit} type="button" class="btn btn-primary mt-3">Submit</button>
            </form>

            {
                (Object.keys(predictions).length === 0 && predictions.constructor === Object ) ?
                    <></> :
                    <BarChart predictions={predictions} />
            }
        </div>
    )
  }

