import styled from "styled-components";
import backgroundFoto from '../../assets/login.jpg';

export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  gap: 2rem;
`;

export const BackgroundImagem = styled.div`
  display: block;
  background: url(${backgroundFoto}) no-repeat 50%;
  background-size: cover;
`;

export const LoginFormularios = styled.div`
  max-width: 30rem;
  padding: 1rem;
  margin-top: 20vh;
`;
