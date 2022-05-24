import styled from "styled-components";
import backgroundFoto from "../../assets/login.jpg";

export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  gap: 2rem;

  @media (max-width: 40rem) {
    grid-template-columns: 1fr;
  }
`;

export const BackgroundImagem = styled.div`
  display: block;
  background: url(${backgroundFoto}) no-repeat 50%;
  background-size: cover;

  @media (max-width: 40rem) {
    display: none;
  }
`;

export const LoginFormularios = styled.div`
  max-width: 30rem;
  padding: 1rem;
  margin-top: 20vh;
  margin-bottom: 5vh;

  @media (max-width: 40rem) {
    max-width: none;
    margin-top: 5vh;
  }
`;
