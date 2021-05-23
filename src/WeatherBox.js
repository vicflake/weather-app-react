
import React, {useState} from "react";
import axios from "axios";


import "./WeatherBox.css";

import Time from "./Time";


export default function WeatherBox(props) {
  const [weather, setWeather] = useState({ loaded: false});
  const [city, setCity] = useState(props.defaultCity);
  
  function handleResponse(response){
    console.log(response.data)
    setWeather({
      loaded: true,
      temperature: response.data.main.temp,
      city: response.data.name,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      date: new Date (response.data.dt * 1000)
    });
  }

  function search(){
    const apiKey = "a14342840b620868fe6664fa5e74a73b";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event){
    event.preventDefault();
    search();
  }

  function handleCityChange(event){
    setCity(event.target.value);
  }



  if (weather.loaded){
  
    return (
      <div className="WeatherBox">
            <form className="Form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="city"
                className="Search-box"
                placeholder="Type city..."
                
                onChange={handleCityChange}
              />
              <input type="submit" value="Search" className="Search-btn"  />
            </form>
            <Time date={weather.date}/>
            <h1>{weather.city}</h1>
            <h2>{weather.description}</h2>
            <img src={weather.icon} alt={weather.description} />
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
    search();

    return "Loading"
  }


 


}
