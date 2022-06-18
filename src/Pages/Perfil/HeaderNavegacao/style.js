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

export const NavMobile = styled.nav`
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

  &.aberto {
    transform: none;
    opacity: 1;
    pointer-events: auto;
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
    &.active,
    & {
      background-color: initial;
      box-shadow: none;
      border: none;
    }

    & {
      justify-content: flex-start;
      width: auto;
      gap: .5rem;
    }

    &.active svg > *,
    &:hover svg > * {
      fill: #fb1;
    }
  }
`;

export const BotaoSair = styled(LinkHeader)``;

const mobileAtivo = {
  outline: "none",
  background: "#fff",
  boxShadow: "0 0 0 3px #fea",
  borderColor: "#fb1",
  color: "#fb1",
};

export const BtnMobile = styled(LinkHeader).attrs(({ ativo }) =>
  ativo ? mobileAtivo : undefined
)`
  justify-content: center;
  padding: 0;
  height: 40px;
  width: 40px;

  &:hover,
  &:focus {
    ${mobileAtivo}
  }

  &::after {
    content: "";
    display: block;
    width: ${({ ativo }) => (ativo ? "4px" : "1.2rem")};
    height: ${({ ativo }) => (ativo ? "4px" : "2px")};
    border-radius: 2px;
    background: currentColor;
    box-shadow: ${({ ativo }) =>
      ativo
        ? "0 8px currentColor, 0 -8px currentColor"
        : "0 6px currentColor, 0 -6px currentColor"};
    ${({ ativo }) => (ativo ? { transform: "rotate(-90deg)" } : undefined)}
    transition: 0.2s;
  }
`;
