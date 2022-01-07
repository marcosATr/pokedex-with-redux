import { createSlice } from "@reduxjs/toolkit";

export const searchStatusSlice = createSlice({
  name: "searchStatus",
  initialState: {
    value: {
      searching: false,
      inputManipulated: false,
      content: "",
      filtering: false,
    },
  },
  reducers: {
    setSearchStatus: (state, action) => {
      state.value.searching = action.payload
    },
    setInputManipulation: (state, action) => {
      state.value.inputManipulated = action.payload
    },
    setContent: (state, action) => {
      state.value.content = action.payload
    }
  }
});

export default searchStatusSlice.reducer;
export const {setSearchStatus, setContent, setInputManipulation} = searchStatusSlice.actions
