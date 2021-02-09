import React from "react";
import TodoItem from "../todoitem";
import { useSelector } from "react-redux";

function TodoList() {
  const storeData = useSelector((store) => store);

  const showNote = storeData.taskNote.map((task) => {
    return <TodoItem task={task} />;
  });
  return (
    <div
      style={{ backgroundColor: "white", borderRadius: "10px" }}
      className="row justify-content-center m-5 p-3"
    >
      <div className="col-md-6">{showNote}</div>
    </div>
  );
}

export default TodoList;
