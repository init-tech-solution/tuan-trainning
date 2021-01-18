import React, { Component } from "react";
import { useHistory, Redirect, Route } from "react-router-dom";

export default function ProtectedRoute(props) {
  // if (props.renderComp) {
  //   return localStorage.getItem('token') ? props.renderComp()
  // : <Redirect to={props.fail} />;
  // }
  let isLogin = localStorage.getItem("token");
  console.log("Islogin is: ", isLogin);

  // return isLogin ? (
  //   <Redirect to={props.success} component={props.component} />
  // ) : (
  //   <Redirect to={props.fail} />
  // );
  return isLogin ? (
    <Route path={props.path} component={props.component} />
  ) : (
    <Redirect to={props.fail} />
  );
}
