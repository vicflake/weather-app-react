import "./WeatherInfo.css";

import React from "react";
import Humidity from "./Humidity";
import Precipitation from "./Precipitation";
import Wind from "./Wind";

export default function WeatherInfo({ humidity, wind, precipitation }) {
  return (
    <div className="WeatherInfo">
      <Humidity humidity={humidity} />
      <Wind wind={wind} />
      <Precipitation precipitation={precipitation} />
    </div>
  );
}
