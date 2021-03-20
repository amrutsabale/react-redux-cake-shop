import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyIcecream } from "../redux";
const IceCreamContainer = () => {
  // More cleaner with hooks without using connect HOC
  const numOfIcecream = useSelector((state) => state.iceCream.numOfIcecream);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>No of Icecream: {numOfIcecream}</h1>
      <button onClick={() => dispatch(buyIcecream())}>Buy a Icecream</button>
    </div>
  );
};

export default IceCreamContainer;
