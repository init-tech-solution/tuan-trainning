import axios from "axios";
import React, { useEffect } from "react";
import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import { actionDisplayName } from "../../action";

function Header() {
  const storeData = useSelector((store) => store);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionDisplayName());
  }, []); // [] useEffect se thay doi khi co mot state trong nay

  return (
    <div
      className="header"
      style={{ color: "white", fontSize: "20px", fontWeight: "bold" }}
    >
      Welcome to {storeData.name}
    </div>
  );
}

export default Header;
