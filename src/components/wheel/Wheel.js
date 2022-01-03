import React, { useEffect, useState } from "react";
import styled from "styled-components";

const WheelHolder = styled.div`
  height: 202px;
  width: 100%;
  overflow: hidden;
`;

const Grid = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  /* overflow: scroll; */
  box-sizing: content-box;
  grid-template-columns: repeat(9, 200px);
  padding: 20px;
  scroll-snap-type: x proximity;
  transition: transform ease-in-out 300ms;
`;

const Card = styled.div`
  height: 180px;
  width: 128px;
  background: linear-gradient(215.78deg, #b57e10 -124.09%, #b57e10 -78.76%, #f9df7b -35.76%, #fff3a6 8.4%, #f9df7b 50.24%, #b57e10 99.06%);
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all ease-in-out 300ms;
  transform: translateX(${(props) => props.translate}px);

  img {
    width: auto;
    height: 180px;
    margin-top: -25px;
  }
`;

const NameBox = styled.div`
  filter: drop-shadow(4px 4px 4px rgba(33, 33, 33, 0.1));
  border-radius: 18px;
  height: 52px;
  border-radius: 18px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #1d1e1d;
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  width: 100%;
  position: absolute;
  bottom: 0;
  z-index: -1;
  padding: 10px;
  text-transform: capitalize;

  img {
    height: 18px;
    width: 18px;
    margin: 0;
  }
`;
const Carrousel = styled.div`
  display: flex;
  align-items: center;

  & > img {
    height: 47px;
    margin: 16px;
    cursor: pointer;
  }
`;

function Wheel(props) {
  const [amount, setAmount] = useState(0);
  const [available, setAvailable] = useState(0);

  const calculateAndSetAvailable = ()=>{
    const grid = document.querySelector("#grid");
    const gridWidth = grid.clientWidth;
    const visible = Math.floor(gridWidth / 200);
    setAvailable(9 - visible);
  }

  useEffect(()=>{
    calculateAndSetAvailable()
  },[])
  
  const handleClickRight = () => {
    if (available > 0) {
      const newAmount = amount - 200;
      setAmount(newAmount);
      setAvailable(available-1)
    } else if( available === 0){
      const newAmount = 0;
      setAmount(newAmount);
      calculateAndSetAvailable();
    }
  };
  const handleClickLeft = () => {
    if (amount <= -200) {
      const newAmount = amount + 200;
      setAmount(newAmount);
      setAvailable(available+1)
    } else if (amount > -200 && amount !==0){
      setAmount(0);
      // setAvailable(available+1)
    } else if(amount === 0){
      console.log('hello')
      const newAmount = available*(-200);
      setAmount(newAmount);
      setAvailable(0);
    }
  };
  return (
    <Carrousel>
      <img src="/img/arrowLeft.png" alt="Arrow Left" onClick={handleClickLeft} />
      <WheelHolder>
        <Grid id="grid">
          {props.legendary.map((pkmn) => {
            return (
              <Card key={pkmn.name} translate={amount}>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pkmn.id}.png`} alt={pkmn.name} />
                <NameBox>
                  <span>{pkmn.name}</span>
                  <img src="/img/Pokeball.png" alt="Pokeball" />
                </NameBox>
              </Card>
            );
          })}
        </Grid>
      </WheelHolder>
      <img src="/img/arrowRight.png" alt="Arrow Right" onClick={handleClickRight} />
    </Carrousel>
  );
}

export default Wheel;
