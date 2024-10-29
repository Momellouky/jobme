import React from 'react';
import {Bar} from 'react-chartjs-2'

import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
} from 'chart.js';

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



        return (
            <div className='d-flex flex-wrap justify-content-center'>
                <div className='m-5 w-50 '>
                    <Bar data={data} options={options}/>
                </div>
            </div>

        );

}

export default BarChart;