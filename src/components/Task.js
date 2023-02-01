import React from 'react'
import './task.css';
import { useNavigate} from 'react-router-dom';
import {Routes,Route} from "react-router-dom";

const Task= () => {
  return (
    <div className="t">
      <img className="timg"src="https://cdn-icons-png.flaticon.com/128/5847/5847222.png" alt=""/>
      <h2 className='tword'>Assignment</h2>
       <button className='tbutton'>Complete</button>
 </div>
  )
}

export default Task;








