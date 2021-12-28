import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPokemonTypes = createAsyncThunk("pokemonTypes/fetchPokemonTypes", async () => {
  return await fetch("https://pokeapi.co/api/v2/type").then((res) => res.json());
});

export const pokemonTypesSlice = createSlice({
  name: "pokemonTypes",
  initialState: { value: { types: [], status: "idle" } },
  extraReducers: {
    [fetchPokemonTypes.pending]: (state) => {
      state.value.status = "loading";
    },
    [fetchPokemonTypes.fulfilled]: (state, action) => {
      state.value.types = action.payload.results;
      state.value.status = "success";
    },
    [fetchPokemonTypes.rejected]: (state) => {
      state.value.status = "rejected";
    },
  },
});

export default pokemonTypesSlice.reducer;
