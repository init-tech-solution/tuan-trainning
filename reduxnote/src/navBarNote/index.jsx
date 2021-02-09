import React from "react";
import { useSelector } from "react-redux";
function NavbarNote() {
  const storeData = useSelector((store) => store);
  return (
    <h1>Redux Todolist - Total Note Remained: {storeData.taskNote.length}</h1>
  );
}

export default NavbarNote;
