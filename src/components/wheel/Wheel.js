import React from "react";
import styled from "styled-components";
const WheelHolder = styled.div`
  height: 202px;
  display: grid;
grid-gap: 16px;
padding: 16px;
grid-template-columns: repeat(auto-fill,minmax(160px,1fr));
grid-auto-flow: column;
grid-auto-columns: minmax(160px,1fr);
overflow-x: auto;
`;

const Card = styled.div`
  height: 180px;
  width: 128px;
  background: linear-gradient(215.78deg, #b57e10 -124.09%, #b57e10 -78.76%, #f9df7b -35.76%, #fff3a6 8.4%, #f9df7b 50.24%, #b57e10 99.06%);
  border-radius: 18px;
  display: flex;
  justify-content: center;

  img {
    width: auto;
    height: 180px;
    margin-top: -25px;
  }
`;

function CardWrapper(props) {
  return <Card />;
}

function Wheel(props) {
  return (
    <WheelHolder>
      {props.legendary.map((pkmn) => {
        return (
          <Card>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pkmn.id}.png`} alt={pkmn.name} />
          </Card>
        );
      })}
    </WheelHolder>
  );
}

export default Wheel;
