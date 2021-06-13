import React from "react";

import WeatherIcon from "./WeatherIcon"
import "./WeatherForecast.css"


export default function WeatherForecast(){
    return (
        <div className="WeatherForecast">
           <div className="WeatherForecast-day">
               Tue
           </div>
            <WeatherIcon code="01d" size={25}/>
            <div className="WeatherForecast-temperatures">
                <span className="WeatherForecast-max">19°</span>
                <span className="WeatherForecast-min">10°</span>
           </div>
        </div>
    )
}