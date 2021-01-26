import React, { Component } from "react";
import { useHistory, Redirect, Route } from "react-router-dom";

export default function ProtectedRoute(props) {
  let isLogin = localStorage.getItem("token");

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
