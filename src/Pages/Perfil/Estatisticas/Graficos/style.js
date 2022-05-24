import styled from "styled-components";
import { Container } from "../../../../globalStyles";
import { keyframes } from "styled-components";

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

export const ContainerGrid = styled(Container)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem 2rem;
  margin-bottom: 4rem;
  animation: ${animeLeft} 0.3s forwards;
`;

export const Acessos = styled.div`
  padding: 2rem;
  font-size: 2rem;
`;
