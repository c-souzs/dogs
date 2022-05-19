import styled from "styled-components";
import { keyframes } from "styled-components";
import { ReactComponent as Enviar } from "../../../assets/enviar.svg";

const animarSvg = keyframes`
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
`;

export const SvgBotao = styled(Enviar)``;

export const Formulario = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: stretch;
  margin: 1rem;
`;

export const TextArea = styled.textarea`
  display: block;
  width: 100%;
  font-size: 1rem;
  font-family: var(--type-first);
  resize: none;
  border: 1px solid #eee;
  padding: 0.5rem;
  border-radius: 0.2rem;
  background: #eee;
  transition: 0.2s;

  &:hover,
  &:focus {
    outline: none;
    border-color: #fb1;
    background: #fff;
    box-shadow: 0 0 0 3px #fea;
  }
`;

export const Botao = styled.button`
  border: none;
  cursor: pointer;
  color: #333;
  background: transparent;
  font-size: 1rem;
  padding: 0 1rem;
  overflow: hidden;
`;

export const BotaoAnimado = styled(Botao)`
  &:hover ${SvgBotao} path,
  &:focus ${SvgBotao} path {
    fill: #fea;
    stroke: #fb1;
  }

  &:hover ${SvgBotao} g,
  &:focus ${SvgBotao} g {
    animation: ${animarSvg} 0.8s infinite;
  }
`;
