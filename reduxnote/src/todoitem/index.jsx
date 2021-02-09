import React from "react";
import { EDIT_TASK, REMOVE_TASK } from "../const";
import Button from "../components/button";
import Input from "../components/input";

function TodoItem(props) {
  return (
    <div className="row  mt-4 justify-content-center">
      <div className="col-md-9">
        <h1>{props.task}</h1>
      </div>
      <div className="col-md-1 ">
        <Button Name="DELETE" className={"btn btn-danger"} />
      </div>
      <div className="col-md-1 ml-4">
        <Button Name="EDIT" className={"btn btn-success"} />
      </div>
    </div>
  );
}

export default TodoItem;
