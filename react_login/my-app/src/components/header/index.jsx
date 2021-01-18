import axios from "axios";
import React, { useHistory, useState, useEffect } from "react";
import "./style.css";

function Header() {
  const [display, setDisplay] = useState("");
  console.log("1", display);
  useEffect(() => {
    console.log("2");
    axios({
      method: "GET",
      url: `http://localhost:8069/api/info?user_id=${localStorage.getItem(
        "userID"
      )}`,
      data: null,
    })
      .then((res) => {
        setDisplay(res.data.display_name);
        console.log("3", display);
        console.log("WelCome", res.data.display_name);
      })
      .catch(() => {
        console.log("error");
      });
  }, []);
  //   const handleInfo = () => {
  //     axios({
  //       method: "GET",
  //       url: `http://localhost:8069/api/info?user_id=${localStorage.getItem(
  //         "userID"
  //       )}`,
  //       data: null,
  //     })
  //       .then((res) => {
  //         setDisplay(res.data.display_name);
  //         console.log("WelCome", res.data.display_name);
  //       })
  //       .catch(() => {
  //         console.log("error");
  //       });
  //   };
  return <div className="header">{display}</div>;
}

export default Header;
