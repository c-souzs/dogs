import styled from "styled-components";
import { keyframes } from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-area: 1/1;
`;

const animaEsqueleto = keyframes`
    from {
    background-position: 0px;
  }
  to {
    background-position: -200%;
  }
`;

export const EsqueletoAnimacao = styled.div`
  grid-area: 1/1;
  height: 100%;
  background-image: linear-gradient(90deg, #eee 0px, #fff 50%, #eee 100%);
  background-color: #eee;
  background-size: 200%;
  animation: ${animaEsqueleto} 1.5s infinite linear;
`;

export const Imagem = styled.img`
  grid-area: 1/1;
  opacity: 0;
  transition: 0.2s;
`;
