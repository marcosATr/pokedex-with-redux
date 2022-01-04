import { createSlice } from "@reduxjs/toolkit";

export const activeLegendarySlice = createSlice({
  name: "activeLegendary",
  initialState: {
    value: {},
  },
  reducers: {
    setActiveLegendary: (state, action) => {
      state.value= action.payload
    },
  }
});

export default activeLegendarySlice.reducer;
export const {setActiveLegendary} = activeLegendarySlice.actions
