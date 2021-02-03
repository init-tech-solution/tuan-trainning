import axios from "axios";
import React, { useHistory, useState, useEffect } from "react";
import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import { actionDisplayName } from "../../action";

function Header() {
  const [display, setDisplay] = useState("");
  console.log("1", display);
  const storeData = useSelector((store) => store);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionDisplayName());
  }, []);

  return (
    <div
      className="header"
      style={{ color: "white", fontSize: "20px", fontWeight: "bold" }}
    >
      Welcome to {}
    </div>
  );
}

export default Header;

// useEffect: khi state ma useEffect
