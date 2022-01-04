
import Filter from "../components/filter/Filter";
import Header from "../components/header/Header";
import { PokedexDisplay } from "../components/pokedexDisplay/PokedexDisplay";



export default function Pokedex() {
  return (
    <>
      <Header />
      <Filter/>
      <PokedexDisplay />
    </>
  );
}
