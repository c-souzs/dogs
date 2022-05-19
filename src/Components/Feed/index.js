import React from 'react'
import useFecth from '../../Hooks/useFecth'
import Fotos from './Fotos'
import Modal from './Modal'

const Feed = () => {
  const [modalFoto, setModalFoto] = React.useState(null);

  return (
    <section>
      <Fotos setModalFoto={setModalFoto}/>
      {modalFoto ? <Modal foto={modalFoto} setModalFoto={setModalFoto} /> : undefined}
    </section>
  )
}

export default Feed