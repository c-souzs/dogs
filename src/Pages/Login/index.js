import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Logar from './Logar/index.js';
import Criar from './Criar/index.js';
import Perdeu from './PerdeuSenha/index.js';
import Resetar from './Resetar/index.js';
import { UserContext } from '../../store/UserContext.js';

const Login = () => {
  const ctx = React.useContext(UserContext);

  // Verificar porque demora para fazer a validação
  if(ctx.verificaLogin) return <Navigate to="/conta" />
  return (
    <div>
        <Routes>
            <Route path='/' element={<Logar />}/>
            <Route path='/criar' element={<Criar />}/>
            <Route path='/perdeu'element={<Perdeu />}/>
            <Route path='/resetar' element={<Resetar />}/>
        </Routes>
    </div>
  )
}

export default Login