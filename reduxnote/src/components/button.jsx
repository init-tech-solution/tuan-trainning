import React from "react";

function Button(props) {
  return (
    <button style={props.style} onClick={props.onClick}>
      {props.Name}
    </button>
  );
}

export default Button;
