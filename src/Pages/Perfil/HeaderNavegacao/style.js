import { Link, NavLink } from "react-router-dom";
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

  &.active{
    background: #fff;
    box-shadow: 0 0 0 3px #fea;
    border-color: #fb1;
  }
`;


export const BotaoSair = styled(LinkHeader)``;