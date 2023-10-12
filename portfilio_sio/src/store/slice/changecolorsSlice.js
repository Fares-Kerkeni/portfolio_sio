import { createSlice } from "@reduxjs/toolkit";

export const changecolors = createSlice({
  name: "change",
  initialState: {
    tabelacouleur: ["#fea8bd", "#fa4a34", "#d0f467"],
    couleur: "",
    count: 0,
  },
  reducers: {
    chagecouleur: (state) => {
      state.couleur = state.tabelacouleur[state.count];
      state.count = state.count + 1;
      if (state.count > 2) {
        state.count = 0;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { chagecouleur } = changecolors.actions;

export default changecolors.reducer;
