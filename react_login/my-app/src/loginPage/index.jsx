import React from "react";
import "./style.css";
import Input from "../components/input";
import Button from "../components/button";
import Title from "../components/titleINIT";
export default function Login() {
  return (
    <div className="login-page">
      <div className="form">
        <Title></Title>
        <form className="login-form">
          <Input></Input>
          <Button></Button>
          <p className="message">
            Not registered? <a href="#">Create an account</a>
          </p>
        </form>
      </div>
    </div>
  );
}
