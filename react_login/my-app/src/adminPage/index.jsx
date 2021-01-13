import React from "react";
import Button from "../components/button";
import "./style.css";
export default function Admin() {
  return (
    <div className="admin">
      <h1>WELCOME TO ADMIN</h1>
      <div className="admin__logout">
        <Button Name={"logout"}></Button>
      </div>
    </div>
  );
}
