import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import HeaderNavegacao from './HeaderNavegacao'
import { Container } from '../../globalStyles'
import Feed from '../../Components/Feed'
import PostarFoto from './PostarFoto'
import Estatisticas from '../Perfil/Estatisticas/index.js';

const Perfil = () => {
  const location = useLocation();
  const [titulo, setTitulo] = React.useState('');
  React.useEffect(() => {
    const { pathname } = location;

    if(pathname === '/perfil'){
      setTitulo('Meu perfil')
    } else if(pathname === '/perfil/postar'){
      setTitulo('Poste sua foto')
    } else if(pathname === '/perfil/estatisticas'){
      setTitulo('Estatísticas');
    }
  }, [location]);

  return (
    <Container as='section'>
      <HeaderNavegacao titulo={titulo}/>
      <Routes>
        <Route path='/' element={<Feed />}/>
        <Route path='/postar' element={<PostarFoto />}/>
        <Route path='/estatisticas' element={<Estatisticas />}/>
        <Route path='/teste' element={<Estatisticas />}/>
      </Routes>
    </Container>
  )
}

export default Perfil