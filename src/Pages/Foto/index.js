import React from 'react'
import { useParams } from 'react-router-dom'
import FotoContainer from '../../Components/FotoContainer';
import Loader from '../../Components/Lodaer';
import { Container, Perro } from '../../globalStyles'
import useFecth from '../../Hooks/useFecth';
import { GET_PHOTO } from '../../services/api';

const Foto = () => {
    const {id} = useParams();
    const {carregando, erro, request, dados} = useFecth();

    React.useEffect(() => {
        const {url, options} = GET_PHOTO(id);
        const buscarDados = async () => {
            await request(url, options);
        }
        buscarDados();
    }, []);

  
  return (
    <Container as='section' style={{marginTop: '2rem'}}>
        {dados ? <FotoContainer dados={dados} fotoUnica={true}/> : undefined}
        {erro ? <Perro>{erro}</Perro> : undefined}
        {carregando ? <Loader /> : undefined}
    </Container>
  )
}

export default Foto