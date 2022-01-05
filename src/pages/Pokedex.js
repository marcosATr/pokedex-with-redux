import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Filter from "../components/filter/Filter";
import Header from "../components/header/Header";
import { PokedexDisplay } from "../components/pokedexDisplay/PokedexDisplay";
import { fetchPokemonList, fetchPokemonDetails } from "../features/pokemonList";

export default function Pokedex() {
  const dispatch = useDispatch();
  const pokemonListStatus = useSelector((state) => state.pokemonList.value.status);
  const pokemonList = useSelector((state) => state.pokemonList.value.pokemonList.results);
  const pokemonData = useSelector((state) => state.pokemonList.value.pokemonData);
  const previous = useSelector((state) => state.pokemonList.value.pokemonList.previous);
  const next = useSelector((state) => state.pokemonList.value.pokemonList.next);
  const initialUrl = 'https://pokeapi.co/api/v2/pokemon?limit=9&offset=0'

  useEffect(() => {
    if (pokemonListStatus === "idle") {
      dispatch(fetchPokemonList(initialUrl));
    }
  }, [dispatch, pokemonListStatus]);

  useEffect(() => {
    if (pokemonListStatus === "success") {
        dispatch(fetchPokemonDetails(pokemonList));
    }
  }, [dispatch, pokemonList, pokemonListStatus]);

  const handlePrevious = () => {
    dispatch(fetchPokemonList(previous));
  };

  const handleNext = () => {
    dispatch(fetchPokemonList(next));
  };

  return (
    <>
      <Header />
      <Filter />
      <PokedexDisplay pokemonData={pokemonData} previous={previous} next={next} handleNext={()=>handleNext()} handlePrevious={()=>handlePrevious()}/>
    </>
  );
}
