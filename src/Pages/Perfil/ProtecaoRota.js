import React from "react";
import { Navigate, Route } from "react-router-dom";
import Perfil from ".";
import { UserContext } from "../../store/UserContext";
import PostarFoto from "./PostarFoto";


// Verifica se o usuário está logado e permite o acesso a tela de perfil
// O Componente Outet renderiza os elementos filhos da rota pai.
const ProtecaoRotaPerfil = () => {
  const { verificaLogin } = React.useContext(UserContext);

  if(verificaLogin) return <Perfil /> 
  else if(verificaLogin === false) return <Navigate to='/login'/>
  else return null;
};

export default ProtecaoRotaPerfil;
