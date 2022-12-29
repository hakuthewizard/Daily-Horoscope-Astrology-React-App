import {getReading} from "../api";
import {useEffect, useState} from 'react';
import './Reading.css';

export const Reading = (sign,day) => {
    const [global, setGlobal]=useState({});
    useEffect(()=> {

        getReading(sign,day).then((data)=>{
            setGlobal(data)
        })
    })
    return (
<div>
    <h1>Here is the results</h1>
      {global.description?<div className="card"> 
        <p><span className="reading-title">Horoscope: </span>{global.description}</p>
        <p><span className="reading-title">Lucky Number: </span>{global.lucky_number} </p>
        <p><span className="reading-title">Color: </span>{global.color} </p>
        <p><span className="reading-title">Compatibility: </span>{global.compatibility}</p>
        <p><span className="reading-title">Lucky Time: </span>{global.lucky_time}</p>
        <p><span className="reading-title">Mood: </span>{global.mood}</p>
      </div>: "Loading.."}
  </div>

    )
} 
