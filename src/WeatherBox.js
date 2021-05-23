
import React, {useState} from "react";
import axios from "axios";
import Form from "./Form";

import "./WeatherBox.css";

import Time from "./Time";

export default function WeatherBox() {
  const [weather, setWeather] = useState({ loaded: false});
  
  function handleResponse(response){
    setWeather({
      loaded: true,
      temperature: response.data.main.temp,
      city: response.data.name,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description
    });
  }


  if (weather.loaded){
  
    return (
      <div className="WeatherBox">
            <Form data=""/>
            <Time />
            <h1>{weather.city}</h1>
            <h2>{weather.description}</h2>
            <img src="https://png.pngtree.com/png-vector/20190629/ourmid/pngtree-sun-icon-design-png-image_1518941.jpg" alt="Sunny" />
            <h3>
              {Math.round(weather.temperature)} 
              <span className="units">
                  &deg;C | &deg;F
              </span>
            </h3>
            <ul>
              <li>Humidity: {weather.humidity}%</li>
              <li>Wind: {Math.round(weather.wind)}km/h</li>
            </ul>
      </div>
    )
    

  } else {
    const apiKey = "41398c377c1e7843b58672992d67d0cf";
    let city = "California"
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    axios.get(apiUrl).then(handleResponse);

    return "Loading"
  }


 


}
