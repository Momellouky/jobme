import React, {useEffect} from 'react';
import {Bar} from 'react-chartjs-2'

import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
} from 'chart.js';
import getPrediction from "./utils/httpClient";

// import {render} from "@testing-library/react";

ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
);

const data = {
    labels: ['Mon', 'Tue', 'Wed'],
    datasets : [
        {
            label : 'Branch',
            data : [100, 200, 300],
            backgroundColor : "#61DBFB"
        }
    ]
}

const options = {
    indexAxis: 'y'
}


function BarChart (props)  {

    const data = {
        labels: Object.keys(props.predictions),
        datasets : [
            {
                label : 'Job matches percentage',
                data : Object.values(props.predictions).map(value => value * 100),
                backgroundColor : "#61DBFB"
            }
        ]
    }


    useEffect(() => {
        console.log("From BarChart",  Object.keys(props.predictions).length);
    }, []);

    return (
        <div className='d-flex flex-wrap justify-content-center'>
            <div className='m-5 w-50 '>
                <Bar data={data} options={options}/>
            </div>
        </div>

    );

}

export default BarChart;