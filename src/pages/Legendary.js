import React from "react";
import styled from "styled-components";
import Header from "../components/header/Header";
import { Container } from "../components/helpers/container";

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



function Legendary() {
  return (
    <>
      <Header />
      <Background>
        <Container>
          <CallOut>Legendary Pokémon</CallOut>
        </Container>
      </Background>
    </>
  );
}

export default Legendary;
