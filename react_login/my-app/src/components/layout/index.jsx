import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
function LayoutOne(props) {
  return (
    <div className="layout">
      <div className="layout-header">
        {/* header */}
        <ul>
          <li>
            <Link to="/">Welcome</Link>
          </li>
          <li>
            <Link to="/admin">Admin</Link>
          </li>
        </ul>
      </div>
      <div className="layout-body">
        {/* Body */}
        {props.children}
      </div>

      <div className="layout-footer">
        {/* Footer */}
        <h1>Design By INIT</h1>
      </div>
    </div>
  );
}

export default LayoutOne;
