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

    axios({
      method: "POST",
      url: "http://localhost:8069/api/login",
      data: loginInfo,
    })
      .then((res) => {
        console.log("Login success", res.data);

        let data = res.data;
        // dispatch({
        //   type: "ADD_ID_TOKEN",
        //   payload: { token: data.token, userId: data.id },
        // });
        localStorage.setItem("token", JSON.stringify(data.token));
        localStorage.setItem("userID", JSON.stringify(data.id));

        history.push("/");
      })
      .catch(() => {
        console.log("error");
        NotificationManager.success(
          "Please try again after 3 second",
          "Username or Password wrong",
          3000
        );
      });
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
