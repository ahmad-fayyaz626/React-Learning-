import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openEmployeePopUp: false,
  deletePopUP: false,
};

export const popUpSlice = createSlice({
  name: "PopUp",
  initialState,
  reducers: {
    showPopUp: (state, action) => {
      state.openEmployeePopUp = action.payload ?? true;
    },
    closePopUp: (state) => {
      state.openEmployeePopUp = false;
    },

    openDeletePopUp: (state, action) => {
      state.deletePopUP = action.payload ?? true;
    },

    closeDeletePopUp: (state) => {
      state.deletePopUP = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { showPopUp, closePopUp, openDeletePopUp, closeDeletePopUp } = popUpSlice.actions;

export default popUpSlice.reducer;
