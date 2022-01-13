import styled from "styled-components";
import { Container } from "../helpers/container";
import { Link } from "react-router-dom";

const BackgroundHome = styled.div`
  background-image: linear-gradient(#f5db13, #f2b807);
  min-height: calc(100vh - 56px);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (min-width: 768px) {
    min-height: calc(100vh - 93px);
  }
  @media (min-width: 992px) {
    overflow: hidden;
  }
`;

const ContainerFlex = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: auto;
  flex-direction: column-reverse;
  @media (min-width: 992px) {
    flex-direction: row;
  }
`;

const ContainerPushedToBottom = styled(Container)`
  margin-top: auto;
  text-align: center;
  padding: 1rem;

  @media (min-width: 992px) {
    padding: 2rem 1.5rem;
    text-align: left;
  }
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2rem 0;
  align-items: center;
  text-align: center;
  padding: 1rem;
  @media (min-width: 992px) {
    flex: 1;
    text-align: left;
    align-items: start;
  }

  h1 {
    font-size: 2.6rem;
    line-height: 2.8rem;
    letter-spacing: 5px;
    font-weight: 400;
    margin-top: 1rem;
    margin-bottom: 1rem;
    strong {
      font-weight: 700;
      font-size: 2.6rem;
    }
    @media (min-width: 992px) {
      font-size: 4.5rem;
      line-height: 5.1rem;
      letter-spacing: 10px;
      margin-top: 2rem;
      margin-bottom: 2rem;
    }
  }

  h2 {
    font-size: 1.6rem;
    line-height: 1.8rem;
    letter-spacing: 4px;
    font-weight: 400;
    margin-top: 1rem;
    margin-bottom: 1rem;
    @media (min-width: 992px) {
      font-size: 2rem;
      line-height: 2.2rem;
      letter-spacing: 4px;
      margin-top: 2rem;
      margin-bottom: 2rem;
    }
  }
`;

const HomeImage = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  @media (min-width: 992px) {
    flex: 1;
  }
  img {
    max-width: 100%;
    max-height: 50vh;
    margin: 1rem 0;

    @media (min-width: 992px) {
      max-width: 118%;
      max-height:100vh;
      height: auto;
      margin: 0 0 0 40px;;
    }
  }
`;

export const ButtonGreen = styled(Link)`
  width: max-content;
  padding: 17px 36px 24px;
  margin-top: 1rem;
  margin-bottom: 1rem;
  background-color: #73d677;
  font-weight: 700;
  font-size: 1.4rem;
  line-height: 1.6rem;
  text-decoration: none;
  color: #212121;
  box-shadow: inset 0px -9px 0px rgba(0, 0, 0, 0.18);
  border-radius: 11px;

  &:hover {
    background-color: #f2cb07;
  }

  @media (min-width: 992px) {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`;

export default function Home() {
  return (
    <BackgroundHome>
      <ContainerFlex>
        <TextContent>
          <h1>
            Find all your favorite <strong>Pokémon</strong>
          </h1>
          <h2>Explore all types of Pokémons, its strengths, disadvantages and abilities</h2>
          <ButtonGreen to="/pokedex">All pokémons</ButtonGreen>
        </TextContent>
        <HomeImage>
          <img src="/img/BannerComplete.png" alt="Pikachu" />
        </HomeImage>
      </ContainerFlex>
      <ContainerPushedToBottom>
        <div>
          <p>Made with ❤️ by <a href="https://github.com/marcosATr">marcosATr</a>.</p>
        </div>
      </ContainerPushedToBottom>
    </BackgroundHome>
  );
}
