import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPokemonList = createAsyncThunk("pokemonList/fetchPokemonList", async (page) => {
  return await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${9}&offset=${9 * (page - 1)}`).then((res) => res.json());
});

export const pokemonListSlice = createSlice({
  name: "pokemonList",
  initialState: {
    value: {
      pokemonList: [],
      status: "idle",
    },
  },
  extraReducers: {
    [fetchPokemonList.pending]: (state) => {
      state.value.status = "loading";
    },
    [fetchPokemonList.fulfilled]: (state, action) => {
      state.value.pokemonList = action.payload.results;
      state.value.status = "success";
    },
    [fetchPokemonList.rejected]: (state) => {
      state.value.status = "rejected";
    },
  },
});

export default pokemonListSlice.reducer;
