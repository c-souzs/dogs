import styled from "styled-components";

export const Container = styled.div`
  padding: ${({fotoUnica}) => fotoUnica ? '0' : '0 2rem'};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  grid-row: 2/3;
  overflow-y: auto;
  margin-bottom: ${({fotoUnica}) => fotoUnica ? '0' : '2rem'};
  scroll-behavior: smooth;
`;

export const Comentarios = styled.ul`
  word-break: break-word;
  max-height: ${({fotoUnica}) => fotoUnica ? '30vh' : 'initial'};
`;

export const Comentario = styled.li`
  margin-bottom: 0.5rem;
  line-height: 1.2;
`;

export const Autor = styled.span`
  font-weight: 700;
  margin-right: 0.4rem;
`;

export const Conteudo = styled.p`
  font-size: 1rem;
`;
