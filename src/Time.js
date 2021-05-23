import React from "react";

import "./Time.css";

export default function Time(props) {
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  let minutes = props.date.getMinutes();
  
  if (minutes < 10){
    minutes = `0${minutes}`
  }
  if (hours < 10){
    hours = `0${hours}`
  }

  return (
    <div className="Time">
      <p>Last updated: {day} {hours}:{minutes}</p>
    </div>
  );
}
