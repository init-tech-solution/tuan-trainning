import React from "react";

function Input(props) {
  return (
    <input
      style={props.style}
      type="text"
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
  );
}

export default Input;
