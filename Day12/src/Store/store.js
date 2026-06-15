import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Features/Counter/counterSlice";
import userReducer from "../Features/Counter/User/userSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: userReducer,
  },
});

export default store;
