import { createSlice } from "@reduxjs/toolkit";

export const activeLegendarySlice = createSlice({
  name: "activeLegendary",
  initialState: {
    value: {},
  },
  reducers: {
    setActiveLegendary: (state, action) => {
      // console.log(action.payload)
      state.value= action.payload
    },
  }
});

export default activeLegendarySlice.reducer;
export const {setActiveLegendary} = activeLegendarySlice.actions
