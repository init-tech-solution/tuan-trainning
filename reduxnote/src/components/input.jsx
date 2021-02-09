import React from "react";

function Input(props) {
  return (
    <input
      className={props.className}
      style={props.style}
      type="text"
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
  );
}

export default Input;
