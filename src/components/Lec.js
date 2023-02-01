import React from 'react'
import './lec.css';
import { useNavigate} from 'react-router-dom';
import {Routes,Route} from "react-router-dom";



const Lec = () => {

  const navigate = useNavigate();
  const joinb =()=>{
    navigate('/Video');
};
  return (
    <div className="l">
      <img className="limg"src="https://cdn-icons-png.flaticon.com/128/2080/2080789.png" alt=""/>
      <h2 className='lword'>Lecture</h2>
       <button className='lbutton'onClick={joinb}>Join</button>
 </div>
  )
}

export default Lec;








