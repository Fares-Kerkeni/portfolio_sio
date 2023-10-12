import { configureStore } from "@reduxjs/toolkit";
import popupReducer from "../store/slice/popupSlice";
import changecolorsReducer from "../store/slice/changecolorsSlice";

export default configureStore({
  reducer: {
    popup: popupReducer,
    changecolors: changecolorsReducer,
  },
});
