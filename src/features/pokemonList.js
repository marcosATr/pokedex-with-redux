import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPokemonList = createAsyncThunk("pokemonList/fetchPokemonList", async (url) => {
  return await fetch(url).then((res) => res.json());
});

const fetchArrFunc = async (arr) => {
  const results = [];
  for (const pkmn of arr) {
    const result = await fetch(pkmn.url).then((res) => res.json());
    results.push(result);
  }
  return results;
};

export const fetchPokemonDetails = createAsyncThunk("pokemonList/fetchPokemonDetails", async (arr) => {
  return await fetchArrFunc(arr);
});

export const pokemonListSlice = createSlice({
  name: "pokemonList",
  initialState: {
    value: {
      pokemonList: [],
      pokemonData: [],
      status: "idle",
    },
  },
  extraReducers: {
    [fetchPokemonList.pending]: (state) => {
      state.value.status = "loading";
    },
    [fetchPokemonList.fulfilled]: (state, action) => {
      state.value.pokemonData = [];
      state.value.pokemonList = action.payload;
      state.value.status = "success";
    },
    [fetchPokemonList.rejected]: (state) => {
      state.value.status = "rejected";
    },

    [fetchPokemonDetails.pending]: (state) => {
      state.value.status = "loading at details";
    },
    [fetchPokemonDetails.fulfilled]: (state, action) => {
      // console.log(action.payload)
      state.value.pokemonData = action.payload;
      state.value.status = "success at details";
    },
    [fetchPokemonDetails.rejected]: (state) => {
      state.value.status = "rejected at details";
    },
  },
});

export default pokemonListSlice.reducer;
