import { useEffect } from "react";
import Filter from "../components/filter/Filter";
import Header from "../components/header/Header";



export default function Pokedex() {
  useEffect(()=>{

    async function getTypes() {
      let response = await fetch('https://pokeapi.co/api/v2/type')
      response = await response.json()
      await console.log(response.results)
    }

    getTypes()
  }, [])
  return (
    <>
      <Header />
      <Filter />
    </>
  );
}
