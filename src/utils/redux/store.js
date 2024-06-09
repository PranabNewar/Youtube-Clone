import { configureStore } from "@reduxjs/toolkit";
import appToggleSlice from "./appToggleSlice";
import searchSlice from "./searchSlice";

const store = configureStore({
  reducer: {
    app: appToggleSlice,
    search: searchSlice,
  },
});

export default store;
