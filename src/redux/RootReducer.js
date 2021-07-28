import { combineReducers } from "redux";
import CakeReducer from "./cake/CakeReducer";
import IceCreamReducer from "./iceCream/IceCreamReducer";
import DrinkReducer from "./drinks/DrinkReducer";
import userReducer from "./users/UserReducer";

const rootReducer = combineReducers({
  // cake: CakeReducer,
  // iceCream: IceCreamReducer,
  // drink: DrinkReducer,
  user: userReducer,
});

export default rootReducer;
