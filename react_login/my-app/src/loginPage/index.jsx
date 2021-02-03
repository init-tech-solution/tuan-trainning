import React, { useState } from "react";
import "./style.css";
import axios from "axios";
import Input from "../components/input";
import Button from "../components/button";
import Title from "../components/titleINIT";
import { useHistory } from "react-router-dom";
import "react-notifications/lib/notifications.css";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import { useDispatch, useSelector } from "react-redux";
import { actionLogin } from "../action";
export default function Login() {
  const history = useHistory();
  const dispatch = useDispatch();
  const storeData = useSelector((store) => store);
  const [loginInfo, updateLoginInfo] = useState({
    username: "",
    password: "",
  });

  const handleChange = (key) => {
    return (val) => {
      const newLoginInfo = { ...loginInfo }; // copy object
      newLoginInfo[key] = val; // update key, value
      // const updatedLoginInfo = { ...loginInfo, [key]: val } // nhu tren

      updateLoginInfo(newLoginInfo);
    };
  };

  const handleLogin = () => {
    // console.log(loginInfo);

    dispatch(actionLogin(loginInfo, history));
  };

  return (
    <div className="login-page">
      <div className="form">
        <Title></Title>
        <form className="login-form">
          <Input
            placeHolder="username"
            onChange={handleChange("username")}
            // value={loginInfo.username}
            // onChange={(e) => {
            //   updateLoginInfo(e.target.value);
            // }}
          ></Input>
          <Input
            placeHolder="password"
            onChange={handleChange("password")}
            // value={loginInfo.password}
            // onChange={(e) => {
            //   updateLoginInfo(e.target.value);
            // }}
          ></Input>
          <Button onClick={handleLogin} Name={"Login"}></Button>
          <p className="message">
            Not registered? <a href="#">Create an account</a>
          </p>
        </form>
        <NotificationContainer />
      </div>
    </div>
  );
}
