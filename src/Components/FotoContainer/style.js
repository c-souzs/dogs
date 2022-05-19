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
  height: 36rem;
  border-radius: 0.2rem;
  background-color: #fff;
  display: grid;
  grid-template-columns: 36rem 20rem;
  grid-template-rows: auto 1fr auto;
  overflow: hidden;
  opacity: 0;
  transform: scale(0.8);
  animation: ${animaModal} 0.3s forwards;
`;

export const FotoItem = styled.div`
  grid-row: 1/4;
`;

export const Informacoes = styled.div`
  padding: 2rem 2rem 0 2rem;
`;

export const InfoPostagem = styled.p`
  opacity: 0.5;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
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