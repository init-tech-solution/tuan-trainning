import React, { useState } from "react";
import Input from "../components/input";
import Button from "../components/button";
import { useSelector, useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

function NotePage() {
  const dispatch = useDispatch();
  const storeData = useSelector((store) => store);
  const [task, settask] = useState("");
  const [show, setshow] = useState("none");
  const [newtask, setnewtask] = useState("");

  const addTask = () => {
    dispatch({ type: "ADD_TASK", payload: task });
    console.log(storeData.taskNote);
  };
  const removeTask = (task) => {
    dispatch({ type: "REMOVE_TASK", payload: task });
  };
  const editTask = () => {
    setshow("inline");
  };
  const finalEdit = (task) => {
    dispatch({
      type: "EDIT_TASK",
      payload: { oldTask: task, newTask: newtask },
    });
  };
  const showTaskList = storeData.taskNote.map((task, index) => {
    return (
      <div
        style={{
          width: "200px",
          height: "200px",
          background: "red",
        }}
      >
        {task}
        <div style={{ marginTop: "100px" }}>
          <Button
            Name="Xóa"
            onClick={() => {
              removeTask(task);
            }}
          />
          <Button Name="Sửa" onClick={editTask} />
          <Input
            style={{ display: show }}
            value={newtask}
            onChange={(e) => {
              setnewtask(e.target.value);
            }}
          />
          <Button
            onClick={() => {
              finalEdit(task);
            }}
            Name="FinalEdit"
            style={{ display: show }}
          ></Button>
        </div>
      </div>
    );
  });
  return (
    <div>
      <h1>Total Task Note is: {storeData.taskNote.length}</h1>
      <div>
        <Input
          value={task}
          onChange={(e) => {
            settask(e.target.value);
            console.log(e.target.value);
          }}
          placeholder="Task"
          style={{ marginTop: "50px" }}
        />
        <Button Name="Add" style={{ color: "red" }} onClick={addTask} />
      </div>
      {showTaskList}
    </div>
  );
}

export default NotePage;
