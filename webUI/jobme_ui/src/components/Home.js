import React from 'react';
import Skills from "./Skills";
import BarChart from "./BarChart";
import JobMatchBtn from "./JobMatchBtn";



function Home(props)  {



     return (
         <div>
                <Skills />
                <JobMatchBtn />
                <BarChart />
         </div>
     );

}

export default Home;