import React from "react";
import "./style.css";

export default function Input(props) {
  const handleChange = (e) => {
    props.onChange(e.target.value);
  };

  return (
    <input
      onChange={handleChange}
      type="text"
      placeholder={props.placeHolder}
      // value={props.value}
    />
  );
}
