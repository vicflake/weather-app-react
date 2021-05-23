import React, { useState } from "react";

import "./Temperature.css";

export default function Temperature(props){
    const [unit, setUnit] = useState ("celsius");

    function showFahrenheit(event){
        event.preventDefault();
        setUnit("fahrenheit") 
    }
    function showCelsius(event){
        event.preventDefault();
        setUnit("celsius") 
    }


    if (unit === "celsius"){
        return(
            <h3 className="Temperature">
                  {Math.round(props.celsius)} 
                  <span className="units">
                      &deg;C | 
                      <a href="/" onClick={showFahrenheit}> &deg;F </a>
                  </span>
                </h3>
        )
    } else {
        let fahrenheit = (props.celsius * 9/5) + 32;
        return(
            <h3 className="Temperature">
                  {Math.round(fahrenheit)} 
                  <span className="units">
                  <a href="/" onClick={showCelsius}> &deg;C  </a>| 
                    &deg;F
                  </span>
                </h3>
        )
        
    }

    
    
}