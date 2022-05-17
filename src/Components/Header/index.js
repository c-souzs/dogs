import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/dogs.svg";
import iconeUsuario from "../../assets/usuario.svg";
import * as C from "./style.js";

const Header = () => {
  return (
    <C.Header>
      <C.NavContainer as='nav'>
        <Link to="/">
          <img src={logo} alt="Logo da rede social em svg" />
        </Link>
        <C.LinkFlex to="/login-criar">
          Login / Criar
          <img
            src={iconeUsuario}
            alt="Ícone ilustrativo do perfil do usuário"
          />
        </C.LinkFlex>
      </C.NavContainer>
    </C.Header>
  );
};

export default Header;
