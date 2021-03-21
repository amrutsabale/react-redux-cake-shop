import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCake } from "../redux";

const AddCakes = () => {
  const [number, setNumber] = useState(0);
  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <button onClick={() => dispatch(addCake(number))}>Add Cakes</button>
    </div>
  );
};

export default AddCakes;
