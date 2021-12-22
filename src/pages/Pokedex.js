import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { storePkmnData } from "../actions";
import Filter from "../components/filter/Filter";
import Header from "../components/header/Header";



export default function Pokedex() {
  const dispatch = useDispatch();
  useEffect(()=>{

    async function getTypes() {
      let response = await fetch('https://pokeapi.co/api/v2/type')
      response = await response.json()
      dispatch(storePkmnData({pkmnTypes: response.results}));
    }

    getTypes()
  }, [])
  return (
    <>
      <Header />
      <Filter/>
    </>
  );
}
