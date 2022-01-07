import { Container } from "../helpers/container";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchPokemonTypes } from "../../features/pokemonTypes";
import { close, open } from "../../features/dropdown";
import { setContent, setSearchStatus, setSelected } from "../../features/searchStatus";
import { fetchPokemonDetails, fetchPokemonList } from "../../features/pokemonList";

//https://pokeapi.co/api/v2/type/
const Title = styled.h2`
  font-size: 1.6rem;
  line-height: 1.8rem;
  font-weight: 400;
  margin-top: 2rem;
  margin-bottom: 1rem;
  text-align: center;
  letter-spacing: 4px;
  strong {
    font-size: 1.6rem;
  }
  @media (min-width: 992px) {
    font-size: 2rem;
    letter-spacing: 4px;
    line-height: 2.2rem;
    margin-top: 3rem;
    margin-bottom: 1rem;
  }
`;

const Spacer = styled.div`
  margin-left: 1rem;
  margin-right: 1rem;
`;

const FilterBar = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  background-color: #f2f2f2;
  border-radius: 40px;
  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.25));
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 1.5rem;
  color: rgba(33, 33, 33, 0.8);
  border: none;
  height: 53px;
  width: 100%;
  form {
    display: flex;
  }

  input[type="text"] {
    height: 100%;
    width: 100%;
    background-color: #f2f2f2;
    border: none;
    padding: 1rem 2rem;
    border-radius: 40px 0 0 40px;
  }
  input[type="submit"] {
    background: #dfdfdf;
    border: none;
    padding: 10px 28px;
    border-radius: 40px;
    margin: 6px;
    color: #848484;
    font-size: 0.8rem;
    text-transform: uppercase;
    cursor: pointer;
    filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.25));
  }
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
  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.25));
  position: relative;
  font-size: 0.8rem;
  font-weight: normal;
  z-index: 9;
  /* height:135px; */
  /* text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-evenly; */
`;

const ToggleHandle = styled.div`
  width: 150px;
  border-radius: 4px;
  padding: 0.5rem;
  background-color: #f2f2f2;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
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
  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.25));
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
  const dropdown = props.dropdown;
  const dispatch = useDispatch();
  const dropdownStatus = useSelector((state) => state.dropdown.value[dropdown].status);

  const manageClickOutside = () => {
    const e = window.event;
    const target = document.querySelector(".select-box");

    if (target !== null) {
      if (!target.contains(e.target)) {
        document.removeEventListener("click", manageClickOutside);
        dispatch(close());
      }
    } else {
      document.removeEventListener("click", manageClickOutside);
      dispatch(close());
    }
  };

  const handleDropdown = () => {
    dispatch(close());
    document.removeEventListener("click", manageClickOutside);

    if (dropdownStatus === "closed") {
      dispatch(open(props.dropdown));
      document.addEventListener("click", manageClickOutside);
    }
  };
  return (
    <>
      <SelectBox className="select-handle">
        <ToggleHandle
          onClick={(e) => {
            e.stopPropagation();
            handleDropdown();
          }}
        >
          <span>{props.name}</span>
          <img src="/img/ArrowFilter.png" alt="chevron" />
        </ToggleHandle>
        {dropdownStatus === "open" && (
          <SelectItems className="select-box">
            {props.populate.map((item) => (
              <div key={item.name}>
                <input type="checkbox" id={item.name} name={item.name} />
                <label htmlFor={item.name}>{item.name}</label>
              </div>
            ))}
          </SelectItems>
        )}
      </SelectBox>
    </>
  );
};

export default function Filter() {
  const dispatch = useDispatch();
  const types = useSelector((state) => state.pokemonTypes.value.types);
  const searchContent = useSelector((state) => state.searchStatus.value.content);
  const allUrl = "https://pokeapi.co/api/v2/pokemon?limit=699&offset=0";
  const initialUrl = "https://pokeapi.co/api/v2/pokemon?limit=9&offset=0";
  const pokemonList = useSelector((state) => state.pokemonList.value.pokemonList.results);
  const selectedPokemon = useSelector((state) => state.searchStatus.value.selected);

  useEffect(() => {
    dispatch(fetchPokemonTypes());
  }, [dispatch]);

  //Estado do DropDown do filter:

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

  // useEffect(() => {
  //   dispatch(fetchPokemonDetails(pokemonList));
  // }, [dispatch, pokemonList]);

  useEffect(() => {
    if (pokemonList) {
      const selected = pokemonList.filter((pkmn) => pkmn.name.includes(searchContent.toLowerCase()));
      dispatch(setSelected(selected));
    }
  }, [dispatch, pokemonList, searchContent]);

  const updateSearchField = (e) => {
    dispatch(setContent(e.target.value));
  };
  const search = (e) => {
    e.preventDefault();
    // console.log(searchContent);

    if (searchContent.length === 0) {
      dispatch(setSearchStatus(false));
      dispatch(fetchPokemonList(initialUrl));
      
    } else {
      dispatch(setSearchStatus(true));

      if (searchContent.length > 3) {
        dispatch(fetchPokemonList(allUrl));
        dispatch(fetchPokemonDetails(selectedPokemon))
      } else {
        console.log("search query too small");
      }
    }
  };

  return (
    <>
      <Container>
        <Spacer>
          <Title>
            800 <strong>Pokémons</strong> for you to choose from:
          </Title>
          <FilterBar>
            <form onSubmit={(e) => search(e)}>
              <input type="text" value={searchContent} onChange={(e) => updateSearchField(e)} />
              <input type="submit" value="Search" />
            </form>
          </FilterBar>
          <Filters>
            <SelectionFilterWrapper key={1} name="Type" populate={types} dropdown="dropdownType"></SelectionFilterWrapper>
            <SelectionFilterWrapper key={2} name="Generation" populate={gens} dropdown="dropdownGeneration"></SelectionFilterWrapper>
          </Filters>
        </Spacer>
      </Container>
    </>
  );
}
