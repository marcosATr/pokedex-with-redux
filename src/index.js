import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import pokemonTypesReducer from "./features/pokemonTypes.js";
import legendaryPokemonReducer from "./features/legendaryPokemon.js";
import dropdownReducer from "./features/dropdown.js";
import activeLegendaryReducer from "./features/activeLegendary.js";
import pokemonListReducer from "./features/pokemonList.js"
import searchStatusReducer from "./features/searchStatus.js"

const store = configureStore({
  reducer: {
    dropdown: dropdownReducer,
    pokemonTypes: pokemonTypesReducer,
    legendaryPokemon: legendaryPokemonReducer,
    activeLegendary: activeLegendaryReducer,
    pokemonList: pokemonListReducer,
    searchStatus: searchStatusReducer
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
