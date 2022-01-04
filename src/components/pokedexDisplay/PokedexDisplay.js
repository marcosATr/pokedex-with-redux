import React from "react";
import styled from "styled-components";
import { Container } from "../helpers/container";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
`;

const Card = styled.div`
  width: 350px;
  height: 135px;
  background: #f6f7f9;
  border-radius: 8px;
  filter: drop-shadow(4px 4px 4px rgba(33, 33, 33, 0.1));
  position: relative;
  display: flex;
`;
const Highlight = styled.div`
  background-color: #d93e30;
  position: absolute;
  height: 100%;
  width: 230px;
  right: 0;
  border-radius: 0 8px 8px 0;
  overflow: hidden;
  padding: 10px;

  img {
    width: 100%;
    margin-top: -30px;
  }
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: space-around;
  padding: 6px;
  max-width: 120px;
`;

const Name = styled.span`
  font-family: Karla, sans-serif;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  color: #212121;
  text-align: center;
`;
const Number = styled.span`
  font-family: Karla, sans-serif;
  font-weight: bold;
  font-size: 16px;
  line-height: 21px;
  position: relative;
  color: #212121;
  width: 45px;
  height: 45px;
  border: 2px solid;
  padding: 11px 4px;
  border-radius: 40px;
  text-align: center;
  margin: 2px auto;
`;
const PillHolder = styled.div`
  display: flex;
  z-index: 1;
`;
const Pill = styled.span`
  background: #73d677;
  box-shadow: inset 0px -2px 0px rgb(0 0 0 / 18%);
  border-radius: 7px;
  font-family: Roboto, sans-serif;
  font-size: 14px;
  text-align: center;
  padding: 2px 12px;
  font-weight: 600;
  color: white;
  display: inline-block;
  margin: 0 5px;
`;

export function PokedexDisplay(props) {
  return (
    <Container>
      <Grid>
        {props.pokemonData.map((pkmn) => {
          return (
            <Card>
              <Info>
                <Name>{pkmn.name}</Name>
                <Number>#{pkmn.id}</Number>
                <PillHolder>
                  <Pill>Grass</Pill>
                  <Pill>Fire</Pill>
                </PillHolder>
              </Info>
              <Highlight>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pkmn.id}.png`} alt="teste" />
              </Highlight>
            </Card>
          );
        })}
      </Grid>
    </Container>
  );
}
