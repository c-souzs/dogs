import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HeaderNavegacao from './HeaderNavegacao'
import { Container } from '../../globalStyles'
import Feed from '../Feed'
import PostarFoto from './PostarFoto'
import Estatisticas from '../Perfil/Estatisticas/index.js';

const Perfil = () => {
  return (
    <Container as='section'>
      <HeaderNavegacao />
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