import styled from "styled-components";
import { Container } from "../helpers/container";
import { Link } from "react-router-dom";

const Navbar = styled.div`
  width: 100%;
  background-color: var(--color-third);
  height: 93px;
  display: flex;
  align-items: center;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  position: relative;
  z-index: 10;
`;
const LinkBox = styled.div`
  display: flex;
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
`;

export default function Header() {
  return (
    <Navbar>
      <Container flexBetween>
        <img src="/img/Logo.png" alt="Pokedex Logo" />
        <LinkBox>
          <Link to="/" className="active">
            Home
          </Link>
          <Link to="/">Pokedex</Link>
          <Link to="/">Legendaries</Link>
        </LinkBox>
      </Container>
    </Navbar>
  );
}
