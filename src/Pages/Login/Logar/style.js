import { Link } from "react-router-dom";
import styled from "styled-components";
import { Titulo } from "../../../globalStyles";

export const LoginTitulo = styled(Titulo)``;

export const LoginErro = styled.p`
  color: rgb(255, 51, 17);
  margin: 1rem 0px;
`;

export const Cadastro = styled.div`
  margin-top: 4rem;
  margin-bottom: 4rem;
`;

export const CadastroTitulo = styled.h2`
  font-family: var(--type-second);
  line-height: 1;
  font-size: 2rem;

  &::after {
    content: "";
    display: block;
    background: #ddd;
    height: 0.5rem;
    width: 3rem;
    border-radius: 0.2rem;
  }
`;

export const CadastroMensagem = styled.p`
    margin-top: 2rem;
    margin-bottom: 2rem;
`;

export const CadastroLink = styled(Link)`
    font-size: 1rem;
    font-family: var(--type-first);
    cursor: pointer;
    border: none;
    border-radius: 0.4rem;
    background: #fb1;
    color: #764701;
    min-width: 8rem;
    padding: 0.8rem 1.2rem;
    box-sizing: border-box;
    transition: .1s;

    &:hover,
    &:focus{
        outline: none;
        box-shadow: 0 0 0 3px #fea, 0 0 0 4px #fb1;
    }
`;

