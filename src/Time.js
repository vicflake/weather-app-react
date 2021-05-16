import React from "react";

import "./Time.css";

export default function Time({ time }) {
  return (
    <div className="Time">
      <p>Last updated: {time}</p>
    </div>
  );
}
