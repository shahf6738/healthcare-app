import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [
    { id: 1, name: "John Doe", age: 30 },
    { id: 2, name: "Jane Smith", age: 25 },
    { id: 3, name: "Ali Khan", age: 40 }
  ],
  view: "grid"
};

const patientSlice = createSlice({
  name: "patients",
  initialState,
  reducers: {
    toggleView: (state) => {
      state.view = state.view === "grid" ? "list" : "grid";
    }
  }
});

export const { toggleView } = patientSlice.actions;
export default patientSlice.reducer;