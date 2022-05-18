import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../store/UserContext";

// Verifica se o usuário está logado e permite o acesso a tela de perfil
// O Componente Outet renderiza os elementos filhos da rota pai.
const ProtecaoRotaPerfil = () => {
  const { verificaLogin } = React.useContext(UserContext);

  if(verificaLogin) return <Outlet />
  else if(verificaLogin === false) return <Navigate to='/login'/>
  else return null;
};

export default ProtecaoRotaPerfil;
