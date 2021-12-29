import Header from "../components/header/Header";
import styled from "styled-components";
import { Container } from "../components/helpers/container";
import { Link } from "react-router-dom";

const NotFoundBackground = styled.div`
  background-color: #d93e30;
  min-height: calc(100vh - 56px);
  background-image: url("/img/404.png");
  background-repeat: no-repeat;
  background-position: center 23%;
  background-size: 70%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: auto;
    max-height: 220px;
  }

  @media (min-width: 768px) {
    min-height: calc(100vh - 93px);

    img {
      width: auto;
      max-height: 45vh;
    }
  }
`;

const ContainerFlex = styled(Container)`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}


`;

const ButtonYellow = styled(Link)`
  width: max-content;
  padding: 17px 56px 24px;
  margin-top: 2rem;
  margin-bottom: 1rem;
  background: #f2cb07;
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
    margin-top: 4rem;
  }
`;

const Text = styled.span`
  font-family: Karla, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  color: #f2f2f2;
  text-align: center;
  margin: 2rem;
  line-height: 29px;
  span {
    color: black;
  }
  
  @media (min-width: 992px) {
    text-align: center;
    line-height: 56px;
    font-size: 48px;
    margin: 1rem;
  }
`;

export default function NotFound() {
  return (
    <>
      <Header />
      <NotFoundBackground>
        <ContainerFlex>
          <img src="/img/teamRocket.png" alt="404" />
          <Text>
            The rocket team <span>has won this time</span>.
          </Text>
          <ButtonYellow to="/">Return</ButtonYellow>
        </ContainerFlex>
      </NotFoundBackground>
    </>
  );
}
