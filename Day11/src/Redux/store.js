import { createStore } from "redux";

import reducer from "../Reducers/CartReducer";
const store = createStore(reducer);
export default store;
