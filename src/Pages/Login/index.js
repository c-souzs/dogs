import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Logar from "./Logar/index.js";
import Criar from "./Criar/index.js";
import Perdeu from "./PerdeuSenha/index.js";
import Resetar from "./Resetar/index.js";
import { UserContext } from "../../store/UserContext.js";
import * as C from "./style.js";
import PaginaNaoEncontrada from "../../Components/PaginaNaoEncontrada/index.js";

const Login = () => {
  const ctx = React.useContext(UserContext);

  // Verificar porque demora para fazer a validação
  if (ctx.verificaLogin) return <Navigate to="/perfil" />;
  return (
    <C.Container>
      <C.BackgroundImagem></C.BackgroundImagem>
      <C.LoginFormularios>
        <Routes>
          <Route path="/" element={<Logar />} />
          <Route path="cadastrar" element={<Criar />} />
          <Route path="perdeu" element={<Perdeu />} />
          <Route path="resetar" element={<Resetar />} />
          <Route path="*" element={<PaginaNaoEncontrada />} />
        </Routes>
      </C.LoginFormularios>
    </C.Container>
  );
};

export default Login;
