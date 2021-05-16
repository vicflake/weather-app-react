import "./WeatherBox.css";

import React from "react";

export default function WeatherBox({ city, description, icon }) {
  return (
    <div className="WeatherBox">
      <h1>{city}</h1>
      <h2>{description}</h2>
      <img src={icon} alt={description} />
    </div>
  );
}
