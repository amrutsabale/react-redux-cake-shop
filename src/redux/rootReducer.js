import { combineReducers } from "redux";
import { cakeReducer } from "./cake/cakeReducer";
import icecreamReducer from "./icecream/icecreamReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: icecreamReducer,
});

export default rootReducer;
