import React, { useState, useEffect } from "react";

import "./WeatherForecast.css"
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay"


export default function WeatherForecast(props){
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

   useEffect(() => {
       setLoaded(false);
   }, [props.coordinates]);


    function handleResponse(response){
        setForecast(response.data.daily);
        setLoaded(true);
    }

    

    if(loaded){
        return (
            <div className="WeatherForecast">
                {forecast.map(function(dailyForecast, index){
                    if(index < 5){
                        return(
                        <div key={index}>
                        <WeatherForecastDay data={dailyForecast}/>
                        </div>
                        )
                    } else {
                        return null;
                    }
                })}
            </div>
    );
    } else {
        let apiKey = "a14342840b620868fe6664fa5e74a73b";
        let latitude = props.coordinates.lat;
        let longitude = props.coordinates.lon;
        let apiUrl =`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`

        axios.get(apiUrl).then(handleResponse);

        return null;
    };
    
}

