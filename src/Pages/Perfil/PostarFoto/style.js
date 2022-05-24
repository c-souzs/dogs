import styled from "styled-components";
import Button from "../../../Components/Forms/Button";
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

export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
  animation: ${animeLeft} 0.3s forwards;

  @media (max-width: 40rem) {
    grid-template-columns: 1fr;
  }
`;

export const FormularioLinha = styled.form`
  grid-column: ${({ linha }) => (linha ? "1/-1" : "1/2")};
`;

export const InputsFlex = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 40rem) {
    grid-template-columns: 1fr;
  }
`;

export const InputFile = styled.input`
  margin-bottom: 2rem;
`;

export const BotaoBlock = styled(Button)`
  display: block;
`;

export const FileBackground = styled.div`
  ${({ src }) => (src ? `background: url(${src}) no-repeat 50%;` : undefined)}
  background-size: cover;
  border-radius: 1rem;

  @media (max-width: 40rem) {
    width: 100%;
    height: 250px;
  }
`;
