import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/dogs.svg";
import iconeUsuario from "../../assets/usuario.svg";
import { UserContext } from "../../store/UserContext";
import * as C from "./style.js";

const Header = () => {
  const ctx = React.useContext(UserContext);

  return (
    <C.Header>
      <C.NavContainer as='nav'>
        <Link to="/">
          <img src={logo} alt="Logo da rede social em svg" />
        </Link>
        <C.LinkFlex to={`${ctx.verificaLogin ? '/perfil' : '/login'}`}>
          {ctx.verificaLogin ? `Bem vindo, ${ctx.dadosUsuario.nome}` : 'Login / Criar'}
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
