import React from "react";
import "./style.css"

export default function Input() {
  return (
    <div className="inputForm">
      <input type="text" placeholder="Username"/>
      <input type="password" placeholder="Password" />
    </div>
  );
}
