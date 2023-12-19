import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isShown: false,
};

export const indexSlice = createSlice({
  name: "index",
  initialState,
  reducers: {
    toggleShown: (state) => {
      state.isShown = !state.isShown;
    },
  },
});

export const { toggleShown } = indexSlice.actions;

export default indexSlice.reducer;
