import React from "react";

function Button(props) {
  return (
    <button
      style={props.style}
      onClick={props.onClick}
      className={props.className}
    >
      {props.Name}
    </button>
  );
}

export default Button;
