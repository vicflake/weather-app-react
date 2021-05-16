import "./Temperature.css";

import React from "react";

export default function Temperature({ temp }) {
  return (
    <div className="Temperature">
      {temp}
      <a href="#" className="Celsius">
        &deg;C |
      </a>
      <a href="#" className="Farenheit">
        &deg;F
      </a>
    </div>
  );
}
