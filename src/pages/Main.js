
import React, {useState} from 'react';
import  {SelectDay}  from '../components/SelectDay';
import  {SelectedSign}  from '../components/SelectedSign';
import {Reading} from '../components/Reading'
import {Link} from 'react-router-dom'
import './Main.css';
const Main = () => {
    const [selectedSign,setSelectedSign] = useState(null);
    const [selectedDay,setSelectedDay] = useState(null);
    const restart = () => {
        setSelectedSign(null);
        setSelectedDay(null);
      }
    return (
        <div className='main-container'>
   <h1><Link  className='span' to="/"></Link></h1>
            {!selectedSign && (
               <SelectedSign onSignSelected={setSelectedSign}/>
            )}
            {selectedSign && !selectedDay &&(
              <SelectDay onDaySelected={setSelectedDay} />
            )}
            {selectedSign && selectedDay && (
              <Reading
              sign={selectedSign}
              day={selectedDay}
              />
            )}
      {!selectedSign?"":<button className="home-button" onClick={restart}>Home</button>}
        </div>
    )
}
export default Main;