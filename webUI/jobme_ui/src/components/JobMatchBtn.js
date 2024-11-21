import React, {useEffect, useState} from 'react';
import Backend from "./utils/backend"
import BarChart from "./BarChart";
import Gateway from "./utils/Gateway";



function JobMatchBtn(props) {

        let checked_skills = []
        const gateway = Gateway.getInstance();
        let backend = Backend.getInstance(
            gateway.routeRequest(5000)
        )

        let [predictions, setPredictions] = useState({})
        let [skillsCheckboxChanged, setSkills_checkboxesChanged] = useState(0)
        const [skillsCheckboxes, setSkillsCheckboxes] = useState();

        const handleCheckedSkills = () => {
            console.log("Button clicked");
            setSkills_checkboxesChanged(skillsCheckboxChanged + 1)
            setSkillsCheckboxes(document.getElementsByClassName('skill_checkbox'))
        }

        function asynchMakePrediction() {
            try{
                var promise = backend.makePrediction(checked_skills)
                promise.then((result) => {
                    setPredictions(result)
                    console.log("result from JobMatchBtn.js: ", result)
                })

            }catch (error){
                console.log(error)
            }
        }


        useEffect(() => {
            if(typeof skillsCheckboxes === 'undefined'){
                return;
            }
            for(const el of skillsCheckboxes){
                if(el.checked){
                    checked_skills.push(el.value)
                }
            }

            asynchMakePrediction()

        }, [skillsCheckboxChanged]);

        return (
            <div>
                <div className='mt-4 d-flex flex-wrap justify-content-center'>
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={handleCheckedSkills}
                    >Which job match my skills</button>
                </div>

                {
                    (Object.keys(predictions).length === 0 && predictions.constructor === Object ) ?
                        <></> :
                        <BarChart predictions={predictions} />
                }
            </div>
        );
}

export default JobMatchBtn;