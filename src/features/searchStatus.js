import { createSlice } from "@reduxjs/toolkit";

export const searchStatusSlice = createSlice({
  name: "searchStatus",
  initialState: {
    value: {
      searching: false,
      content: "",
    },
  },
  reducers: {
    setSearchStatus: (state, action) => {
      state.value.searching = action.payload
    },
    setContent: (state, action) => {
      state.value.content = action.payload
    },
    
  }
});

export default searchStatusSlice.reducer;
export const {setSearchStatus, setContent} = searchStatusSlice.actions
