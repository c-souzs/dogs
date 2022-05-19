import React from 'react'
import { UserContext } from '../../store/UserContext';
import Fotos from './Fotos'
import Modal from './Modal'

const Feed = () => {
  const [modalFoto, setModalFoto] = React.useState(null);
  const {dadosUsuario} = React.useContext(UserContext);

  return (
    <section>
      <Fotos user={dadosUsuario.id} setModalFoto={setModalFoto}/>
      {modalFoto ? <Modal foto={modalFoto} setModalFoto={setModalFoto} /> : undefined}
    </section>
  )
}

export default Feed