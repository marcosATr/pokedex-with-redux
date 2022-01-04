import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Filter from "../components/filter/Filter";
import Header from "../components/header/Header";
import { PokedexDisplay } from "../components/pokedexDisplay/PokedexDisplay";
import { fetchPokemonList } from "../features/pokemonList";

export default function Pokedex() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonList(1));
  }, [dispatch]);

  return (
    <>
      <Header />
      <Filter />
      <PokedexDisplay />
    </>
  );
}
