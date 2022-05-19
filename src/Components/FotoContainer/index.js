import React from "react";
import { Link } from "react-router-dom";
import { Titulo } from "../../globalStyles";
import Imagem from "../Imagem";
import FotoComentarios from "./FotoComentarios";
import * as C from "./style.js";

const FotoContainer = ({ dados }) => {
  const { photo, comments } = dados;
  return (
    <C.FotoContainer>
      <C.FotoItem>
        <Imagem src={photo.src} alt={photo.title}/>
      </C.FotoItem>
      <C.Informacoes>
        <C.InfoPostagem>
          <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
          <C.Acessos>{photo.acessos}</C.Acessos>
        </C.InfoPostagem>
        <Titulo>
          <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
        </Titulo>
        <C.Atributos>
          <C.Atributo>{photo.peso} kg</C.Atributo>
          <C.Atributo>{photo.idade} anos</C.Atributo>
        </C.Atributos>
      </C.Informacoes>
      <FotoComentarios id={photo.id} comments={comments} />
    </C.FotoContainer>
  );
};

export default FotoContainer;
