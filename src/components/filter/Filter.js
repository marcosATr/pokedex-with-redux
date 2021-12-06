import { Container } from "../helpers/container";
import styled from "styled-components";
//https://pokeapi.co/api/v2/type/
const Title = styled.h2`
  font-size: 1.6rem;
  line-height: 1.8rem;
  font-weight: 400;
  margin-top: 2rem;
  margin-bottom: 1rem;
  text-align: center;
  letter-spacing: 4px;
  @media (min-width: 992px) {
    font-size: 2rem;
    letter-spacing: 4px;
    line-height: 2.2rem;
    margin-top: 3rem;
    margin-bottom: 1rem;
  }
`;

const FilterBar = styled.input`
  margin-top: 1rem;
  margin-bottom: 1rem;
  background-color: #f2f2f2;
  padding: 1rem 2rem;
  box-shadow: 4px 4px 16px rgba(1, 28, 64, 0.2);
  border-radius: 40px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 1.5rem;
  color: rgba(33, 33, 33, 0.8);
  border: none;
  height: 53px;
  width: 100%;
`;
const Filters = styled.div`
  margin-top: 2rem;
  margin-bottom: 1rem;
  display: flex;
  & > div + div {
    margin-left: 4rem;
  }
`;

const SelectBox = styled.div`
  background-color: #f2f2f2;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  position: relative;
  font-size: 0.8rem;
  font-weight: normal;
  width: 150px;
  /* height:135px; */
  padding: 0.5rem;
  text-align: center;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 4px;
`;

const SelectItems = styled.div`
  width: 150px;
  background-color: #f2f2f2;
  /* border-radius: 4px; */
  scrollbar-color: var(--color-primary) #f2f2f2;
  scrollbar-width: thin;
  &::-webkit-scrollbar-thumb {
    background-color: var(--color-primary);
  }
  &::-webkit-scrollbar {
    background-color: #f2f2f2;
    width: 8px;
  }
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  position: absolute;
  height: 200px;
  left: 0;
  top: 42px;
  overflow-y: scroll;
  text-align: left;

  div {
    padding: 5px 3px;
    margin-left: 25px;
    display: flex;
    align-items: center;
    text-transform: capitalize;
    input {
      margin-right: 10px;
    }
  }
`;

const SelectionFilterWrapper = (props) => {
  return (
    <SelectBox>
      <span>{props.name}</span>
      <img src="/img/ArrowFilter.png" alt="chevron" />
      <SelectItems>
        {props.populate.map((item) => (
          <div key={item.name}>
            <input type="checkbox" id={item.name} name={item.name} />
            <label htmlFor={item.name}>{item.name}</label>
          </div>
        ))}
      </SelectItems>
    </SelectBox>
  );
};

//fetch
// const getTypes = async () => {
//   const types = await fetch("https://pokeapi.co/api/v2/type/").then((res) => res.json());
//   return types;
// };

export default function Filter() {
  const typeArray = [
    { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" },
    { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" },
    { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
    { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
    { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" },
    { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" },
    { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
    { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" },
    { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" },
    { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" },
    { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
    { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
    { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" },
    { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" },
    { name: "ice", url: "https://pokeapi.co/api/v2/type/15/" },
    { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" },
    { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" },
    { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" },
    { name: "unknown", url: "https://pokeapi.co/api/v2/type/10001/" },
    { name: "shadow", url: "https://pokeapi.co/api/v2/type/10002/" },
  ];
  const gens = [
    { name: "generation-i", url: "https://pokeapi.co/api/v2/generation/1/" },
    { name: "generation-ii", url: "https://pokeapi.co/api/v2/generation/2/" },
    { name: "generation-iii", url: "https://pokeapi.co/api/v2/generation/3/" },
    { name: "generation-iv", url: "https://pokeapi.co/api/v2/generation/4/" },
    { name: "generation-v", url: "https://pokeapi.co/api/v2/generation/5/" },
    { name: "generation-vi", url: "https://pokeapi.co/api/v2/generation/6/" },
    { name: "generation-vii", url: "https://pokeapi.co/api/v2/generation/7/" },
    { name: "generation-viii", url: "https://pokeapi.co/api/v2/generation/8/" },
  ];

  return (
    <>
      <Container>
        <div>
          <Title>
            800 <strong>Pokémons</strong> for you to choose from:
          </Title>
          <FilterBar />
          <Filters>
            <SelectionFilterWrapper name="type" populate={typeArray}></SelectionFilterWrapper>
            <SelectionFilterWrapper name="Generation" populate={gens}></SelectionFilterWrapper>
          </Filters>
        </div>
      </Container>
    </>
  );
}
