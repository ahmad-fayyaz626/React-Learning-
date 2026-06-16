import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../config/api";
const initialState = {
  employees: [],
  loading: false,
  error: null,
};

const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchEmployees.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchEmployees.fulfilled, (state, action) => {
      state.loading = false;
      state.employees = action.payload;
    });
    builder.addCase(fetchEmployees.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(postEmployee.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(postEmployee.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(postEmployee.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(deleteEmployee.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(deleteEmployee.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(deleteEmployee.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(editEmployee.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(editEmployee.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(editEmployee.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

const fetchEmployees = createAsyncThunk(
  "employee/fetchEmployees",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/emp");
      return response.data;
    } catch (error) {
      return rejectWithValue("Something went wrong while fetching employees.");
    }
  },
);

const deleteEmployee = createAsyncThunk(
  "employee/deleteEmployee",
  async (employeeId, { rejectWithValue, dispatch }) => {
    try {
      await api.delete(`/emp/${employeeId}`);
      dispatch(fetchEmployees());
      return employeeId;
    } catch (error) {
      return rejectWithValue("Something went wrong while deleting employee.");
    }
  },
);
const editEmployee = createAsyncThunk(
  "employee/editEmployee",
  async ({employeeId, employeeData}, { rejectWithValue, dispatch }) => {
    try {
      console.log("Edit Call Howa hai");
      await api.put(`/emp/${employeeId}`, employeeData);
      dispatch(fetchEmployees());
      return employeeId;
    } catch (error) {
      return rejectWithValue("Something went wrong while editing employee.");
    }
  },
);

const postEmployee = createAsyncThunk(
  "employee/postEmployee",
  async (employeeData, { rejectWithValue, dispatch }) => {
    try {
      const response = await api.post("/emp", employeeData);
      dispatch(fetchEmployees());
      return response.data;
    } catch (error) {
      return rejectWithValue("Something went wrong while posting employee.");
    }
  },
);

export { fetchEmployees, postEmployee, deleteEmployee, editEmployee };

export default employeeSlice.reducer;
