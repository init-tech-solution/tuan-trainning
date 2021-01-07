import React from "react";
import "./style.css";
export default function Button(props) {
  const handleClick = (e) => {
    e.preventDefault();
    props.onClick(e.target.value);
  };

  return <button onClick={handleClick}>Login</button>;
}
