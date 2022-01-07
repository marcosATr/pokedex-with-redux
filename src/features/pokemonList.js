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

export const fetchSelectedPokemon = createAsyncThunk("pokemonList/fetchSelectedPokemon", async (name, { dispatch }) => {
  const allUrl = "https://pokeapi.co/api/v2/pokemon?limit=699&offset=0";
  const res = await fetch(allUrl).then((res) => res.json());
  const result = res.results;

  const selected = result.filter((pkmn) => pkmn.name.includes(name));
  await dispatch(fetchPokemonDetails(selected));
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
