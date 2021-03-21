import { combineReducers } from "redux";
import { cakeReducer } from "./cake/cakeReducer";
import icecreamReducer from "./icecream/icecreamReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: icecreamReducer,
  user: userReducer,
});

export default rootReducer;
