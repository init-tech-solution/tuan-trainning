import React, { Component } from "react";
import { useHistory, Redirect, Route } from "react-router-dom";

export default function ProtectedRoute(props) {
  // if (props.renderComp) {
  //   return localStorage.getItem('token') ? props.renderComp()
  // : <Redirect to={props.fail} />;
  // }
  let isLogin = localStorage.getItem("token")
  console.log("Is login?===>", isLogin)

  return isLogin ? (
    // <Redirect to={props.success} />
    <Route path={props.success} component={props.component}/>
  ) : (
    <Redirect to={props.fail} />
  );
}
