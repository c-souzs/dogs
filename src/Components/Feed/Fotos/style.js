import styled from 'styled-components';
import { keyframes } from 'styled-components';

const animeLeft = keyframes`
  0%{
    opacity: 0;
    transform: translateX(-20px);
  }
  100%{
    opacity: 1;
    transform: translateX(0);
  }
`;

export const ListaFotos = styled.ul`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 1rem;
    margin-bottom: 1rem;
    justify-items: center;
    animation: ${animeLeft} .3s forwards;
`;