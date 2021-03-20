import { BUY_CAKE } from "./cakeActionTypes";

const buyCake = () => {
  return { type: BUY_CAKE, info: "First redux action" };
};

export { buyCake };
