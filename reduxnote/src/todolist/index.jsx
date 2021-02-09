import React from "react";
import TodoItem from "../todoitem";
import { useSelector } from "react-redux";

function TodoList() {
  const storeData = useSelector((store) => store);

  const showNote = storeData.taskNote.map((task) => {
    return <TodoItem task={task} />;
  });
  return (
    <div className="row justify-content-center">
      <div className="col-md-6">{showNote}</div>
    </div>
  );
}

export default TodoList;
