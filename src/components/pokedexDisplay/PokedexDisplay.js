import React from "react";
import styled from "styled-components";
import { pokemonColors } from "../helpers/colors";
import { Container } from "../helpers/container";

const Grid = styled.div`
  display: grid;
  /* grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr); */
  /* grid-gap: 30px 10px; */
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 20px 4px;
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
  background-color: ${(props) => pokemonColors[props.mainType]};
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
  width: 120px;
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
  justify-content: ${(props) => (props.types.length > 1 ? "unset" : "center")};
`;
const Pill = styled.span`
  background: ${(props) => pokemonColors[props.type]};
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
const Navigation = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`;
const NavOption = styled.div`
  font-family: Karla,sans-serif;
    font-weight: bold;
    font-size: 16px;
    color: #212121;
    border: 2px solid;
    padding: 11px 4px;
    border-radius: 15px;
    text-align: center;
    min-width: 100px;
    margin:1rem;
    cursor: pointer;
`;

export function PokedexDisplay(props) {
  return (
    <Container>
      <Grid>
        {props.pokemonData.map((pkmn) => {
          return (
            <Card key={pkmn.name}>
              <Info>
                <Name>{pkmn.name}</Name>
                <Number>#{pkmn.id}</Number>
                <PillHolder types={pkmn.types}>
                  {pkmn.types.map((one) => {
                    return (
                      <Pill key={one.type.name} type={one.type.name}>
                        {one.type.name}
                      </Pill>
                    );
                  })}
                </PillHolder>
              </Info>
              <Highlight mainType={pkmn.types[0].type.name}>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pkmn.id}.png`} alt="teste" />
              </Highlight>
            </Card>
          );
        })}
      </Grid>
      <Navigation>
        {props.previous ? <NavOption onClick={()=>props.handlePrevious()}>Previous</NavOption> : null}
        {props.next ? <NavOption onClick={()=>props.handleNext()}>Next</NavOption> : null}
      </Navigation>
    </Container>
  );
}
