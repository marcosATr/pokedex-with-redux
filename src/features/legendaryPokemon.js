import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchLegendaryPokemon = createAsyncThunk(
  "legendaryPokemon/fetchLegendaryPokemon",
  async (id) => {
    return await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`).then((res) =>
      res.json()
    );
  }
);

export const legendaryPokemonSlice = createSlice({
  name: "legendaryPokemon",
  initialState: { value: { legendaryPokemon: [], status: "idle" } },
  extraReducers: {
    [fetchLegendaryPokemon.pending]: (state) => {
      state.value.status = "loading";
    },
    [fetchLegendaryPokemon.fulfilled]: (state, action) => {
      state.value.legendaryPokemon.push(action.payload);
      state.value.status = "success";
    },
    [fetchLegendaryPokemon.rejected]: (state) => {
      state.value.status = "rejected";
    },
  },
});

export default legendaryPokemonSlice.reducer;
