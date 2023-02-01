import React from 'react';
import Dheader from './Dheader.js';
import Lec from './Lec.js';
import Task from './Task.js';
import { useNavigate} from 'react-router-dom';
import {Routes,Route} from "react-router-dom";

const Dashboard = () => {

  return (

    <div>
    <Dheader/>
    <div>
    <Lec/>
    </div>
    <Lec/>
    <div>
    <Task/>
    </div>
    
    </div>

  )
}

export default Dashboard



