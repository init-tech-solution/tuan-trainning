import React, { useState } from "react";
import { EDIT_TASK, REMOVE_TASK } from "../const";
import Button from "../components/button";
import Input from "../components/input";
import { useDispatch, useSelector } from "react-redux";

function TodoItem({ task }) {
  const [show, setshow] = useState("none");
  const [newtask, setnewtask] = useState("");
  const dispatch = useDispatch();
  const handleDelete = (task) => {
    dispatch({ type: REMOVE_TASK, payload: task });
    // alert(task);
  };
  const handleEdit = () => {
    setshow("inline");
  };
  const handleUpdate = (task) => {
    dispatch({ type: EDIT_TASK, payload: { oldTask: task, newTask: newtask } });
    setshow("none");
  };
  return (
    <div>
      <div className="row  mt-4 justify-content-center">
        <div className="col-md-9">
          <h1 className="text-left">{task}</h1>
        </div>
        <div className="col-md-1 mr-3">
          <Button
            Name="DELETE"
            className={"btn btn-danger"}
            onClick={() => {
              handleDelete(task);
            }}
          />
        </div>
        <div className="col-md-1 ml-4">
          <Button
            Name="EDIT"
            className={"btn btn-success"}
            onClick={handleEdit}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-3 ">
          <Input
            style={{
              border: "2px solid yellow",
              display: show,
              borderRadius: "10px",
              outline: "none",
              height: "38px",
            }}
            value={newtask}
            onChange={(e) => {
              setnewtask(e.target.value);
            }}
          />
        </div>
        <div className="col-md-3">
          <Button
            Name="UPDATE"
            style={{ display: show, color: "white", marginLeft: "50px" }}
            className="btn btn-warning"
            onClick={() => {
              handleUpdate(task);
            }}
          />
        </div>
      </div>
      <hr style={{ borderColor: "black" }} />
    </div>
  );
}

export default TodoItem;
