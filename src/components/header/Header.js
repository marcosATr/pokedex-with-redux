import styled from "styled-components";
import { Container } from "../helpers/container";
import { NavLink } from "react-router-dom";

const Navbar = styled.div`
  width: 100%;
  background-color: var(--color-third);
  display: flex;
  align-items: center;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  position: relative;
  z-index: 10;
  height: 56px;
  img {
    height: 45px;
    @media (min-width: 768px) {
      height: auto;
    }
  }
  /* Small devices (tablets, 768px and up) */
  @media (min-width: 768px) {
    height: 93px;
  }
`;
const LinkBox = styled.div`
  display: none;
  align-items: center;
  a {
    font-size: 25px;
    text-decoration: none;
    color: var(--color-dark);
    display: flex;
    height: 100%;
    align-items: center;
    &.active {
      border-bottom: 3px solid;
    }

    & + a {
      margin-left: 30px;
    }
  }

  /* Medium devices (desktops, 992px and up) */
  @media (min-width: 992px) {
    display: flex;
  }
`;

export default function Header() {
  return (
    <Navbar>
      <Container flexBetween>
        <img src="/img/Logo.png" alt="Pokedex Logo" />
        <LinkBox>
          <NavLink to="/" activeClassName="active">
            Home
          </NavLink>
          <NavLink to="/pokedex" activeClassName="active">Pokedex</NavLink>
          <NavLink to="/legendary" activeClassName="active">Legendaries</NavLink>
        </LinkBox>
      </Container>
    </Navbar>
  );
}
