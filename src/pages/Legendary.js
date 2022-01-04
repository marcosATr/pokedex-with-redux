import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Header from "../components/header/Header";
import { Container } from "../components/helpers/container";
import StatusReport from "../components/statusReport/StatusReport";
import Wheel from "../components/wheel/Wheel";
import { setActiveLegendary } from "../features/activeLegendary";
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

  const legendaryPokemon = useSelector((state) => state.legendaryPokemon.value.legendaryPokemon);
  const activeLegendary = useSelector((state) => state.activeLegendary.value);
  
  useEffect(() => {
    const legendaryIds = [144, 145, 146, 150, 243, 244, 245, 249, 250];
    legendaryIds.forEach((id) => {
      dispatch(fetchLegendaryPokemon(id));
    });
  }, [dispatch]);

  useEffect(() => {
    const first = legendaryPokemon[0];
    dispatch(setActiveLegendary(first));
  }, [dispatch, legendaryPokemon]);

  if (legendaryPokemon.length === 0) return null;
  if (!activeLegendary) return null;

  
  return (
    <>
      <Header />
      <Background>
        <Container>
          <CallOut>Legendary Pokémon</CallOut>
          <CurrentPokemonBox>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${activeLegendary.id}.png`} alt={`${activeLegendary.name}`} />
            <div>
              <Title>{activeLegendary.name}</Title>
              <Text>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              </Text>
              <StatusReport stats={activeLegendary.stats} />
            </div>
          </CurrentPokemonBox>
          <Wheel legendary={legendaryPokemon} />
        </Container>
      </Background>
    </>
  );
}

export default Legendary;