import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import RootReducer from "../redux/RootReducer";
import logger from "redux-logger";

const store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

export default store;
