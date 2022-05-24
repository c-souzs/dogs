import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  margin-top: 1rem;
  position: relative;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 1rem;
`;

export const NavMobile = styled.nav.attrs(({ ativo }) => {
  if (ativo) {
    return {
      transform: "initial !important",
      opacity: "1 !important",
    };
  }
})`
  display: block;
  position: absolute;
  z-index: 999;
  top: 70px;
  right: 0;
  padding: 0 1rem;
  background: #fff;
  box-shadow: 0 1px 2px rgb(0 0 0 / 20%);
  border-radius: 0.2rem;
  transform: translateX(-10px);
  opacity: 0;
  pointer-events: none;
  transition: 0.3s;

  & a:hover svg > *,
  & button:hover svg > * {
    fill: #fb1;
  }

  & a,
  & button {
    display: flex;
    align-items: center;
    background: none;
    width: 100%;
    border: none;
    padding: 0.5rem 0;
    cursor: pointer;
  }

  & button {
    border-bottom: none;
  }

  & svg {
    margin-right: 0.5rem;
  }
`;

export const LinkHeader = styled(NavLink)`
  background: #eee;
  border-radius: 0.2rem;
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  transition: 0.1s;
  cursor: pointer;

  &:hover,
  &:focus {
    background: #fff;
    box-shadow: 0 0 0 3px #eee;
    border-color: #333;
    outline: none;
  }

  &.active {
    background: #fff;
    box-shadow: 0 0 0 3px #fea;
    border-color: #fb1;
  }

  @media (max-width: 40rem) {
    &:hover,
    &:focus,
    &.active {
      background-color: initial;
      box-shadow: none;
      border-color: initial;
    }

    & {
      justify-content: flex-start;
    }

    &.active svg > * {
      fill: #fb1;
    }
  }
`;

export const BotaoSair = styled(LinkHeader)``;

export const BtnMobile = styled(LinkHeader).attrs(({ ativo }) => {
  if (ativo) {
    return {
      outline: "none",
      backgroundColor: "#fff",
      boxShadow: "0 0 0 3px #fea",
      borderColor: "#fb1",
      color: "#fb1",
    };
  }
})`
  padding: 0;
  justify-content: center;
  &:hover,
  &:focus {
    outline: none;
    background-color: #fff;
    box-shadow: 0 0 0 3px #fea;
    border-color: #fb1;
    color: #fb1;
  }

  &::after {
    content: "";
    display: block;
    width: ${({ ativo }) => (ativo ? "4px" : "1.2rem")};
    height: ${({ ativo }) => (ativo ? "4px" : "2px")};
    border-radius: 2px;
    background-color: currentColor;
    box-shadow: ${({ ativo }) =>
      ativo
        ? "0 8px currentColor, 0 -8px currentColor"
        : "0 6px currentColor, 0 -6px currentColor"};
    transform: ${({ ativo }) => (ativo ? "rotate(-90deg)" : "none")};
    transition: 0.2s;
  }
`;
