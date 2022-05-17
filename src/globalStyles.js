import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Spectral:wght@700&display=swap');
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html{
        font-size: 16px;
    }

    body{
        padding-top: 4rem;
        --type-first: Helvetica,Arial,sans-serif;
        --type-second: "Spectral",Georgia;
        font-family: var(--type-first);
        color: #333;
    }

    img{
        max-width: 100%;
        display: block;
        object-fit: cover;
    }

    a{
        text-decoration: none;
        color: #333;
    }

    ul{
        list-style: none;
    }

    input{
        border: 1px solid #eee;
        display: block;
        width: 100%;
        font-size: 1rem;
        padding: 0.8rem;
        border-radius: 0.4rem;
        background: #eee;
        transition: .2s;
    }
    input:hover{
        outline: none;
        border-color: #fb1;
        background: #fff;
        box-shadow: 0 0 0 3px #fea;
    }

`;

export const Container = styled.div`
  max-width: 50rem;
  padding: 0 1rem;
  margin: 0 auto;
`;

export const Button = styled.button`
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
  transition: 0.1s;

  &:hover {
    outline: none;
    box-shadow: 0 0 0 3px #fea, 0 0 0 4px #fb1;
  }
`;

export const Titulo = styled.h1`
  font-family: var(--type-second);
  line-height: 1;
  font-size: 3rem;
  margin: 1rem 0;
  position: relative;
  z-index: 1;

  &::after {
    content: "";
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    background: #fb1;
    position: absolute;
    bottom: 5px;
    left: -5px;
    border-radius: 0.2rem;
    z-index: -1;
  }
`;

export default GlobalStyles;
