import React from "react";
import { useSelector } from "react-redux";
function NavbarNote() {
  const storeData = useSelector((store) => store);
  return (
    <div
      className="m-5"
      style={{ backgroundColor: "white", borderRadius: "10px" }}
    >
      <h1>Redux Todolist - Total Note Remained: {storeData.taskNote.length}</h1>
    </div>
  );
}

export default NavbarNote;
