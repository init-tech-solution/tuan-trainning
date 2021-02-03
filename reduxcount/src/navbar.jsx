import React from "react";
import { useSelector } from "react-redux";

function Navbar() {
  const storeData = useSelector((store) => store);
  return <div>Item in cart is: {storeData.count}</div>;
}

export default Navbar;
