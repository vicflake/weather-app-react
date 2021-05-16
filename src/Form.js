import React from "react";

import "./Form.css";

export default function Form() {
  return (
    <form className="Form">
      <input
        type="text"
        name="city"
        className="Search-box"
        placeholder="Type city..."
      />
      <input type="submit" value="Search" className="Search-btn" />
    </form>
  );
}
