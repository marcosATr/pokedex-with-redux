import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Header from "../components/header/Header";
import { Container } from "../components/helpers/container";
import { fetchLegendaryPokemon } from "../features/legendaryPokemon";

const Background = styled.div`
  background-color: #212121;
  min-height: calc(100vh - 56px);

  @media (min-width: 768px) {
    min-height: calc(100vh - 93px);
  }
`;

const CallOut = styled.h1`
  font-family: Karla, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 72px;
  line-height: 84px;
  letter-spacing: 4px;
  color: #ffffff;
  padding: 2rem;
  border-bottom: 1px solid white;
`;

const CurrentPokemonBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Title = styled.h1`
  font-family: Karla, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 72px;
  line-height: 84px;
  letter-spacing: 4px;
  color: #fdfdfd;
  text-transform: capitalize;
`;

const Text = styled.p`
  font-family: Source Sans Pro, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
`;

function Legendary() {
  const dispatch = useDispatch();

  const legendaryPokemon = useSelector(
    (state) => state.legendaryPokemon.value.legendaryPokemon
  );
  useEffect(() => {
    const legendaryIds = [144, 145, 146, 150, 243, 244, 245, 249, 250];
    legendaryIds.forEach((id) => {
      dispatch(fetchLegendaryPokemon(id));
    });
  }, [dispatch]);

  if (legendaryPokemon.length === 0) return null;
  console.log(legendaryPokemon);
  return (
    <>
      <Header />
      <Background>
        <Container>
          <CallOut>Legendary Pokémon</CallOut>
          <CurrentPokemonBox>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${legendaryPokemon[0].id}.png`}
              alt={`${legendaryPokemon[0].name}`}
            />
            <div>
              <Title>{legendaryPokemon[0].name}</Title>
              <Text>
                {legendaryPokemon[0].flavor_text_entries[91]["flavor_text"]}
              </Text>
            </div>
          </CurrentPokemonBox>
        </Container>
      </Background>
    </>
  );
}

export default Legendary;
