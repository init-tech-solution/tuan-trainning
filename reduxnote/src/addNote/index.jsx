import React, { useState } from "react";
import Input from "../components/input";
import Button from "../components/button";
import { useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarNote from "../navBarNote";
import { ADD_NEW_TASK } from "../const/index";
import "./style.css";
import Todolist from "../todolist";

function AddNote() {
  const dispatch = useDispatch();

  const [task, settask] = useState("");

  const addTask = () => {
    dispatch({ type: ADD_NEW_TASK, payload: task });
  };

  return (
    <div>
      <NavbarNote />
      <h1>Add Note Component</h1>
      <div className="row justify-content-center">
        <Input
          className={"form-control col-md-6"}
          value={task}
          onChange={(e) => {
            settask(e.target.value);
            console.log(e.target.value);
          }}
          placeholder="Note"
          style={{ textAlign: "center" }}
        />
        <Button
          className={"btn btn-primary col-md-1 ml-1"}
          Name="Add"
          style={{ color: "white" }}
          onClick={addTask}
        />
      </div>
      <Todolist />
    </div>
  );
}

export default AddNote;
