import React from "react";
import "./style.css";
import Input from "./input";
import Button from "./button";
import Title from "./titleINIT";
export default function Home() {
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
