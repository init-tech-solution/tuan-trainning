import React from "react";
import Button from "../components/button";
import "./style.css";
import { useHistory } from "react-router-dom";
export default function Admin() {
  const history = useHistory();
  const handleLogout = () => {
    history.push("/login");
    localStorage.removeItem("token");
  };
  return (
    <div className="admin">
      <h1>WELCOME TO ADMIN</h1>
      <div className="admin__logout">
        <Button Name={"logout"} onClick={handleLogout}></Button>
      </div>
    </div>
  );
}
