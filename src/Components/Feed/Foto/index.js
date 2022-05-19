import React from "react";
import Imagem from "../../Imagem";
import * as C from "./style.js";

const Foto = ({ foto, setModalFoto }) => {
  return (
    <C.ContainerFoto onClick={() => setModalFoto(foto)}>
      <Imagem src={foto.src} alt={foto.title}/>
      <C.Acessos>{foto.acessos}</C.Acessos>
    </C.ContainerFoto>
  );
};

export default Foto;
