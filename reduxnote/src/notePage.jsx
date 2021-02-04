import React, { useState } from "react";
import Input from "./components/input";
import Button from "./components/button";
import { useSelector, useDispatch } from "react-redux";

function NotePage() {
  const dispatch = useDispatch();
  const storeData = useSelector((store) => store);
  const [task, settask] = useState("");

  const addTask = () => {
    dispatch({ type: "ADD_TASK", payload: task });
    console.log(storeData.taskNote);
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
          <Button Name="Xóa" />
          <Button Name="Sửa" />
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
