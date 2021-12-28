import { createSlice } from "@reduxjs/toolkit";

export const dropdownSlice = createSlice({
  name: "dropdown",
  initialState: {
    value: {
      dropdownType: {
        status: "closed",
      },
      dropdownGeneration: {
        status: "closed",
      },
    },
  },
  reducers: {
    open: (state, action) => {
      state.value[action.payload].status = "open";
    },
    close: (state, action) => {
      state.value = {
        dropdownType: {
          status: "closed",
        },
        dropdownGeneration: {
          status: "closed",
        },
      };
    },
  },
});

export default dropdownSlice.reducer;
export const { open, close } = dropdownSlice.actions;
