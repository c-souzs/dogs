import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  display: flex;
  top: 0px;
  left: 0px;
  z-index: 1000;
  background-color: rgba(0, 0, 0, .4);
`;

export const ContainerAnimacao = styled.div`
  margin: auto;
  width: 80px;
  height: 80px;
  display: flex;
  padding-left: 5px;
  background: rgba(255, 255, 255, 0.5);
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;
