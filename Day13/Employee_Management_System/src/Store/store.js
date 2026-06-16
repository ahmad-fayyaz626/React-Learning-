import { configureStore } from "@reduxjs/toolkit";
import popUpReducer from "../Features/PopUpSlice";
import employeeReducer from "../Features/EmployeeSlice";

export const store = configureStore({
  reducer: {
    popUp: popUpReducer,
    employee: employeeReducer,
  },
});
export default store;
