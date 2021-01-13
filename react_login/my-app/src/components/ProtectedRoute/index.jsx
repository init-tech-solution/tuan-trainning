import React, { Component } from "react";
import { useHistory, Redirect } from "react-router-dom";

export default function ProtectedRoute(props) {
  if (props.renderComp) {
    return localStorage.getItem('token') ? props.renderComp()
  : <Redirect to={props.fail} />; 
  }

  return localStorage.getItem('token') ? <Redirect to={props.success} />
  : <Redirect to={props.fail} />;
}
