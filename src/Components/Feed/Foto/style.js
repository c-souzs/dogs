import styled from "styled-components";
import iconeAcessos from '../../../assets/visualizacao.svg';


export const Acessos = styled.span`
  grid-area: 1/-1;
  background-color: rgba(0, 0, 0, .3);
  color: #fff;
  font-size: 1rem;
  gap: .25rem;
  align-items: center;
  justify-content: center;

  display: none;

  &::before {
    width: 16px;
    height: 10px;
    content: "";
    display: inline-block;
    margin-right: .25rem;
    background: url(${iconeAcessos}) no-repeat;
  }
`;

export const ContainerFoto = styled.li`
  display: grid;
  border-radius: 0.2rem;
  overflow: hidden;
  cursor: pointer;

  &:nth-child(2) {
    grid-column: 2/4;
    grid-row: span 2;
  }

  &:hover ${Acessos} {
    display: flex;
  }
`;

export const Foto = styled.img`
  grid-area: 1/-1;
`;

