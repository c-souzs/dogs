import styled from "styled-components";
import { keyframes } from "styled-components";
import iconeAcessos from "../../assets/visualizacao-black.svg";

const animaModal = keyframes`
    to{
        opacity: initial;
        transform: initial;
    }
`;

export const FotoContainer = styled.div`
  margin: auto;
  height: ${({ fotoUnica }) => (fotoUnica ? "auto" : "36rem")};
  border-radius: 0.2rem;
  background-color: #fff;
  display: ${({ fotoUnica }) => (fotoUnica ? "block" : "grid")};
  grid-template-columns: ${({ fotoUnica }) =>
    fotoUnica ? "1fr" : "36rem 20rem"};
  grid-template-rows: auto 1fr auto;
  overflow: hidden;
  opacity: 0;
  transform: scale(0.8);
  animation: ${animaModal} 0.3s forwards;

  @media (max-width: 40rem){
    display: block;
    overflow-y: auto;
  }
`;

export const FotoItem = styled.div`
  grid-row:  ${({ fotoUnica }) => (fotoUnica ? "1" : "1/4")};
  ${({fotoUnica}) => {
    if(fotoUnica){
      return {
        overflow: "hidden",
        borderRadius: '.4rem'
      }
    }
  }}
`;

export const Informacoes = styled.div`
  padding: ${({ fotoUnica }) => (fotoUnica ? "1rem 0 0" : "2rem 2rem 0 2rem")};
`;

export const InfoPostagem = styled.p`
  opacity: 0.5;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BotaoApagar = styled.button`
  background: #ddd;
  padding: 0.3rem 0.6rem;
  line-height: 1;
  border: 1px solid transparent;
  font-size: 0.875rem;
  font-family: var(--type-first);
  cursor: pointer;
  border-radius: 0.4rem;
  transition: 0.1s;

  &:hover,
  &:focus {
    outline: none;
    background: #fff;
    box-shadow: 0 0 0 3px #eee;
    border-color: #333;
  }
`;

export const Acessos = styled.span`
  &::before {
    content: "";
    display: inline-block;
    width: 16px;
    height: 10px;
    margin-right: 0.5rem;
    background: url(${iconeAcessos});
  }
`;

export const Atributos = styled.ul`
  display: flex;
  font-size: 1.125rem;
  font-weight: 700;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

export const Atributo = styled.li`
  margin-right: 2rem;

  &::before {
    width: 2px;
    height: 20px;
    content: "";
    display: inline-block;
    margin-right: 0.5rem;
    position: relative;
    top: 3px;
    background: #333;
    margin-top: 5px;
  }
`;
