import React from 'react'
import { useParams } from 'react-router-dom'
import Feed from '../../Components/Feed';
import { Container, Titulo } from '../../globalStyles'

const Usuario = () => {
    const {name} = useParams();
  return (
    <Container as='section'>
        <Titulo style={{margin: '2rem 0 2rem 1.5rem', fontSize: '4rem'}}>{name}</Titulo>
        <Feed id={name}/>
    </Container>
  )
}

export default Usuario