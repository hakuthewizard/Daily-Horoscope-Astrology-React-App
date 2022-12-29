import './SelectDay.css';


export const SelectDay = ({ onDaySelected }) => {
    return (
      <div className="container">
          <h2> Select Day</h2>
          <div className="grid">
              {['yesterday',
              'today',
              'tomorrow'].map((day,index) => (
                  <button className="day-button" 
                  key={index} 
                  value={day}
                  onClick={ () => onDaySelected(day) }
                  >
                  {day}</button>
              ))}
              </div>
      </div>
      
    )
  }