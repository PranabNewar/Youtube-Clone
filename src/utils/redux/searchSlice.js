import { createSlice, current } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    searchCached: (state, action) => {
      state = Object.assign(state, action.payload);
      console.log("🚀 ~ file: searchSlice.js:9 ~ state:", current(state));
    },
  },
});
export const { searchCached } = searchSlice.actions;
export default searchSlice.reducer;
