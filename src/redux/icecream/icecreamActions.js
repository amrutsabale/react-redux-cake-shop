import { BUY_ICECREAM } from "./icecreamActionTypes";

const buyIcecream = () => {
  return { type: BUY_ICECREAM, info: "First redux action" };
};

export { buyIcecream };
