import React from "react";
import "./style.css";

export default function Content() {
  return (
    <div className="login-page">
      <div className="form">
        <h1 className="title">WELCOME TO INIT</h1>
        <form className="login-form">
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button>login</button>
          <p className="message">
            Not registered? <a href="#">Create an account</a>
          </p>
        </form>
      </div>
    </div>
  );
}
