import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Filter from "../components/filter/Filter";
import Header from "../components/header/Header";
import { PokedexDisplay } from "../components/pokedexDisplay/PokedexDisplay";
import { fetchPokemonList } from "../features/pokemonList";

export default function Pokedex() {
  const dispatch = useDispatch();
  const pokemonListStatus = useSelector((state) => state.pokemonList.value.status);
  const pokemonList = useSelector((state) => state.pokemonList.value.pokemonList);

  useEffect(() => {
    if (pokemonListStatus === "idle") {
      dispatch(fetchPokemonList(1));
    }
  }, [dispatch, pokemonListStatus]);

  return (
    <>
      <Header />
      <Filter />
      <PokedexDisplay />
    </>
  );
}
