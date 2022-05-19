import React from "react";
import useFecth from "../../../Hooks/useFecth";
import { GET_PHOTO } from "../../../services/api";
import {Perro} from '../../../globalStyles'
import Carregando from "../../Carregando";
import FotoContainer from "../../FotoContainer";
import * as C from "./style.js";

const Modal = ({ foto, setModalFoto }) => {
  const { dados, erro, carregando, request } = useFecth();

  React.useEffect(() => {
    const buscarFoto = async () => {
      const { url, options } = GET_PHOTO(foto.id);
      await request(url, options);
    }
    buscarFoto();
  }, [request]);

  const fecharModal = (e) => {
    const modalFundo = e.currentTarget;
    const modalClique = e.target;

    if (modalClique === modalFundo) setModalFoto(null);
  }

  return (
    <C.Modal onClick={fecharModal}>
      {erro ? <Perro> {erro} </Perro> : undefined}
      {carregando ? <Carregando/> : undefined}
      {dados ? <FotoContainer dados={dados}/> : undefined}
    </C.Modal>
  );
};

export default Modal;
