import { createSlice } from "@reduxjs/toolkit";

export const scrollpositionSlice = createSlice({
  name: "scrollPosition",
  initialState: {
    position: 0,
  },
  reducers: {
    positionY: (state) => {
      console.log("window.scrollY:", window.scrollY);
      state.position = window.scrollY;
    },
  },
});

// Action creators are generated for each case reducer function
export const { positionY } = scrollpositionSlice.actions;

export default scrollpositionSlice.reducer;
