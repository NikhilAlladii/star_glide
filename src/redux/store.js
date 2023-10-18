import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { homeReducer, homesReducer } from "./homes/homeReducer";

const rootReducer = combineReducers({
  homes: homesReducer,
  home: homeReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

export default store;
