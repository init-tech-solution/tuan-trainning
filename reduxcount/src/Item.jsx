import React from "react";
import { useDispatch } from "react-redux";
import { actionAddItem, actionAddItemDelay } from "./actions";

function Item() {
  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(actionAddItem());
  };
  const handleRemove = () => {
    dispatch({ type: "REMOVE_ITEM" });
  };
  const handleAdd2 = () => {
    dispatch(actionAddItemDelay());
  };
  return (
    <div>
      ITEM
      <div>
        <button onClick={handleAdd}>Add Item</button>
        <button onClick={handleRemove}>Remove Item</button>
        <button onClick={handleAdd2}>Add After 1s</button>
      </div>
    </div>
  );
}

export default Item;
