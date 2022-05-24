import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import HeaderNavegacao from './HeaderNavegacao'
import { Container } from '../../globalStyles'
import Feed from '../../Components/Feed'
import PostarFoto from './PostarFoto'
import Estatisticas from '../Perfil/Estatisticas/index.js';
import { UserContext } from '../../store/UserContext'
import PaginaNaoEncontrada from '../../Components/PaginaNaoEncontrada'

const Perfil = () => {
  const location = useLocation();
  const [titulo, setTitulo] = React.useState('');
  const {dadosUsuario} = React.useContext(UserContext);


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
    <Container as='section' >
      <HeaderNavegacao titulo={titulo}/>
      <Routes>
        <Route path='/' element={<Feed id={dadosUsuario.id}/>}/>
        <Route path='/postar' element={<PostarFoto />}/>
        <Route path='/estatisticas' element={<Estatisticas />}/>
        <Route path="*" element={<PaginaNaoEncontrada />} />
      </Routes>
    </Container>
  )
}

export default Perfil