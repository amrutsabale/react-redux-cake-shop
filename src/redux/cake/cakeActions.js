import { BUY_CAKE, ADD_CAKE } from "./cakeActionTypes";

const buyCake = () => {
  return { type: BUY_CAKE, info: "First redux action" };
};

const addCake = (number) => {
  return { type: ADD_CAKE, payload: number };
};

export { buyCake, addCake };
