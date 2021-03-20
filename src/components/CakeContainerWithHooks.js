import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux";
const CakeContainerWithHooks = () => {
  // More cleaner with hooks without using connect HOC
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>No of Cakes: {numOfCakes}</h1>
      <button onClick={() => dispatch(buyCake())}>Buy a Cake</button>
    </div>
  );
};

export default CakeContainerWithHooks;
