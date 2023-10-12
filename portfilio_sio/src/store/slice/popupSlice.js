import { createSlice } from "@reduxjs/toolkit";

export const popupSlice = createSlice({
  name: "popup",
  initialState: {
    value: false,
  },
  reducers: {
    chagevalue: (state) => {
      state.value = !state.value;
    },
  },
});

// Action creators are generated for each case reducer function
export const { chagevalue } = popupSlice.actions;

export default popupSlice.reducer;
