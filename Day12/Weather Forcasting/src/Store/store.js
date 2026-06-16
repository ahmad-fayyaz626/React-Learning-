import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

import WeatherReducer from "../Reducers/WeatherReducer";
const store = createStore(
  WeatherReducer,
  applyMiddleware(thunk)
);



export default store;