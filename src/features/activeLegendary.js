import { createSlice } from "@reduxjs/toolkit";

export const activeLegendarySlice = createSlice({
  name: "activeLegendary",
  initialState: {
    value: 144,
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
