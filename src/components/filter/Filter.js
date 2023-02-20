import React from 'react'
import { useState } from 'react';
import TuneIcon from '@mui/icons-material/Tune';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './filter.css';


function Filter(props) {
    console.log(props.max);
    console.log(props.min);
    let filter = 'header'; // Filter container
    let parameter = 'date'; // Date container with date selector
    let option = 'filter-parameter';  // Date parameter
    let inputs = 'filter-options'; // Date options
   
    const [switchToggled, setSwitchToggled] = useState(false);
    const [dateToggled, setDateToggled] = useState(false);
    
    const ToggleSwitch = () => {

        // Change the state whenever the element is clicked
        switchToggled ? setSwitchToggled(false) : setSwitchToggled(true);
        console.log(switchToggled);

    }

    const toggleDates = () => {

          // Change the state whenever the element is clicked
          dateToggled ? setDateToggled(false) : setDateToggled(true);
          console.log(dateToggled);


    }

    // If the switch is true give active class 
    // Filter and date options parameter
    filter += switchToggled ? ' active' : '';
    option += dateToggled ? ' active' : '';
    
    // If filter is active on click, show the date parameter
    if(filter === 'header active'){

        parameter += ' active';
        

    }
    // If i click on date parameter show me the input options
    if(option === 'filter-parameter active'){


        inputs += ' active';

    }
    return (

                <div>
                  <div className={filter} onClick={ToggleSwitch}>
                    <span>Filter by</span>
                    <TuneIcon className='icons'/>
                  </div>
    
                  <div className={parameter} onClick={toggleDates}>
    
                        <div className={option} onClick={toggleDates}>
    
                            <span>Date </span>
                            <KeyboardArrowDownIcon className='icons'/>
                            
                        </div> 
    
                        <div className={inputs}>
    
                          <label htmlFor="start">Start date:</label>
                          <input type="date" id="start" name="minDate"
                                  
                                  value={props.min} onChange={(e) => props.func(e)}/>

                          <label htmlFor="end">End date:</label>
                          <input type="date" id="end" name="maxDate"
                                  
                                  value={props.max} onChange={(e) => props.func(e)}/>
                        
                        </div>  

                  </div>
    
                  </div>
  )
}


export default Filter;