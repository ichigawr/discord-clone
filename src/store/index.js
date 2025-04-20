import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import logger from "redux-logger";
import { authReducer } from "@/reducers/auth";

const initialState = {};

const rootReducer = combineReducers({
  auth: authReducer,
});

const store = legacy_createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk, logger)
);

export default store;
