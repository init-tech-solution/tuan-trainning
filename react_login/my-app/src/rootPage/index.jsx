import React from "react";
import "./style.css";
import Button from "../components/button";
import { useHistory } from "react-router-dom";
import Header from "../components/header";

export default function Welcome() {
  const history = useHistory();

  const logOut = () => {
    history.push("/login");
    localStorage.removeItem("token");
  };

  return (
    <div className="welcome">
      <Header />
      <h1>WELCOME HOME</h1>
      <div className="welcome__logout">
        <Button Name={"LogOut"} onClick={logOut}></Button>
      </div>
    </div>
  );
}
