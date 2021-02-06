import React, { useState } from "react";
import Button from "../components/button";
import Input from "../components/input";

function LoginPage() {
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  const handleClick = () => {
    var User = {
      name: name,
      password: password,
    };
    alert(User);
    console.log(alert);
  };
  return (
    <div className="login">
      <h1 style={{ marginTop: "50px" }}>Login User</h1>
      <div className="login__info">
        <Input
          placeholder="Username"
          value={name}
          onChange={(e) => {
            setname(e.target.value);
            console.log(e.target.value);
          }}
        />{" "}
        <br />
        <Input
          placeholder="Password"
          style={{ marginTop: "10px" }}
          value={password}
          onChange={(e) => {
            setpassword(e.target.value);
            console.log(e.target.value);
          }}
        />{" "}
        <br />
        <Button
          onClick={handleClick}
          Name="login"
          style={{ marginTop: "10px" }}
        />
      </div>
    </div>
  );
}

export default LoginPage;
