import './SelectedSign.css'

export const SelectedSign = ({ onSignSelected }) => {  
    
    return (
      <div className='container'>
        <h2> Select Your Sign</h2>
        <div className="grid">                 
              {[  'aries',
                  'taurus',
                  'gemini',
                  'cancer',
                  'leo',
                  'virgo',
                  'libra',
                  'scorpio',
                  'sagittarius',
                  'capricorn',
                  'aquarius',
                  'pisces'].map((sign) => (
                  <button 
                  className="sign-button"
                  key={sign}
                  value={sign} 
                  onClick={ () => onSignSelected(sign) }
                  >
                  {sign}</button>
              ))}</div>
      </div>
    )
  }