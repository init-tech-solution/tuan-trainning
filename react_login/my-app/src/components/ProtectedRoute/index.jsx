import React, { Component } from "react";
import { useHistory, Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ProtectedRoute(props) {
  let storeData = useSelector((store) => store);
  // let isLogin = localStorage.getItem("token");
  let isLogin = storeData.token;
  return isLogin ? (
    <Route
      path={props.path}
      component={props.component}
      render={props.render}
    />
  ) : (
    <Redirect to={props.fail} />
  );
}
