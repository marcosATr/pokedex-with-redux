import styled from "styled-components";
import { Container } from "../helpers/container";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = styled.div`
  width: 100%;
  background-color: var(--color-third);
  display: flex;
  align-items: center;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  position: relative;
  z-index: 11;
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
const HamburgerBox = styled.div`
  height: 30px;
  width: 36px;
  margin: 0 10px;
  cursor: pointer;
  position: relative;

  span {
    display: block;
    margin: 7px;
    background-color: black;
    width: 100%;
    height: 5px;
    transition: all 300ms ease-out;
    position: absolute;
  }
  span:nth-child(1) {
    margin-top: 0px;
  }
  span:nth-child(2) {
    margin-top: 13px;
  }
  span:nth-child(3) {
    margin-top: 26px;
  }
  &.menuActive {
    span:nth-child(1) {
      transform: rotate(45deg);
      position: absolute;
      margin-top: 15px;
    }
    span:nth-child(2) {
      opacity: 0;
      transition: all 200ms ease-in-out;
    }
    span:nth-child(3) {
      transform: rotate(-45deg);
      position: absolute;
      margin-top: 15px;
    }
  }
  @media (min-width: 992px) {
    display: none;
  }
`;

const PopNav = styled.div`
  width: 100%;
  height: 0;
  display: flex;
  flex-direction: column;
  position: absolute;
  padding: 20px;
  background: linear-gradient(180deg, #f5db13 0%, #f2b807 100%);
  box-shadow: 4px 4px 24px rgba(1, 17, 38, 0.2);
  border-radius: 0px 0px 16px 16px;
  transition: all 300ms ease-in-out;
  justify-content: space-evenly;
  z-index:10;

  &.menuActive {
    height: 180px;
    transition: all 500ms ease-in-out;
  }

  a {
    font-size: 25px;
    text-decoration: none;
    color: var(--color-dark);
  }
`;

function AllLinks() {
  return (
    <>
      <NavLink to="/">
        Home
      </NavLink>
      <NavLink to="/pokedex">
        Pokedex
      </NavLink>
      <NavLink to="/legendary">
        Legendaries
      </NavLink>
    </>
  );
}

export default function Header() {
  const [menuStatus, setMenuStatus] = useState(false);
  return (
    <>
      <Navbar>
        <Container flexBetween>
          <NavLink to="/">
            <img src="/img/Logo.png" alt="Pokedex Logo" />
          </NavLink>
          <LinkBox>
            <AllLinks />
          </LinkBox>
          <HamburgerBox
            className={menuStatus ? "menuActive" : null}
            onClick={() => {
              setMenuStatus(!menuStatus);
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </HamburgerBox>
        </Container>
      </Navbar>
      {menuStatus ? (
        <PopNav className={menuStatus ? "menuActive" : null}>
          <AllLinks />
        </PopNav>
      ) : null}
    </>
  );
}
