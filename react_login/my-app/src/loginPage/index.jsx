import React, { useState } from "react";
import "./style.css";

import Input from "../components/input";
import Button from "../components/button";
import Title from "../components/titleINIT";

export default function Login() {
  const [loginInfo, updateLoginInfo] = useState({
    username: "",
    password: "",
  });

  const handleChange = (key) => {
    return (val) => {
      const newLoginInfo = { ...loginInfo }; // copy object
      newLoginInfo[key] = val;
      // const updatedLoginInfo = { ...loginInfo, [key]: val } // nhu tren

      updateLoginInfo(newLoginInfo);
    };
  };

  const handleLogin = () => {
    console.log(loginInfo);
  };

  return (
    <div className="login-page">
      <div className="form">
        <Title></Title>
        <form className="login-form">
          <Input
            placeHolder="username"
            onChange={handleChange("username")}
          ></Input>
          <Input
            placeHolder="password"
            onChange={handleChange("password")}
          ></Input>
          <Button onClick={handleLogin}></Button>
          <p className="message">
            Not registered? <a href="#">Create an account</a>
          </p>
        </form>
      </div>
    </div>
  );
}
