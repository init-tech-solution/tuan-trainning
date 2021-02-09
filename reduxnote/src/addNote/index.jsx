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
      <div
        className=" p-3 ml-5 mr-5"
        style={{
          backgroundColor: "white",
          borderRadius: "10px",
        }}
      >
        <h1>Add Note Component</h1>
        <div className="AddNote__task row justify-content-center">
          <Input
            className={"form-control col-md-6 "}
            value={task}
            onChange={(e) => {
              settask(e.target.value);
              console.log(e.target.value);
            }}
            placeholder="Note"
            style={{
              textAlign: "center",
              border: "1px solid black",
              display: "inline",
            }}
          />
          <Button
            Name="ADD NOTE"
            onClick={addTask}
            style={{
              padding: "0px 10px 0 10px",
              textAlign: "center",
              marginLeft: "5px",
              // color: "white",
              // backgroundColor: "#067bf9",

              border: "none",

              borderRadius: "5px",
            }}
          />
        </div>
      </div>
      <Todolist />
    </div>
  );
}

export default AddNote;
