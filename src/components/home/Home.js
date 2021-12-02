import styled from "styled-components";
import { Container } from "../helpers/container";
import { Link } from "react-router-dom";

const BackgroundHome = styled.div`
  background-image: linear-gradient(#f5db13, #f2b807);
  height: calc(100vh - 93px);
  width: 100%;
  display:flex;
  justify-content: center;
  align-items: center;
`;

const containerExtraCss = `
  display: flex;
  align-items: center;
  justify-content: space-around;
`

const TextContent = styled.div`
  display:flex;
  width:100%;
  max-width:40%;
  padding: 2rem 0;
  flex-direction: column;
`;

const HomeImage = styled.div`
  display:flex;
  width:100%;
  max-width:50%;
  img {
    max-width: 100%;
    height: auto;
  }
`;

export default function Home() {
  return (
    <BackgroundHome>
      <Container css={containerExtraCss}>
        <TextContent>
          <h1>Find all your favorite Pokemon</h1>
          <h2>You can know the type of Pokemon, its strengths, disadvantages and abilities</h2>
          <button>See Pokemons</button>
        </TextContent>
        <HomeImage>
          <img src="/img/BannerComplete.png" alt="Pikachu" />
        </HomeImage>
      </Container>
    </BackgroundHome>
  );
}
