import React from "react";
import { Link } from "react-router-dom";
import { Titulo } from "../../globalStyles";
import useFecth from "../../Hooks/useFecth";
import { DELETE_PHOTO } from "../../services/api";
import { UserContext } from "../../store/UserContext";
import Imagem from "../Imagem";
import Loader from "../Lodaer";
import FotoComentarios from "./FotoComentarios";
import * as C from "./style.js";

const FotoContainer = ({ dados }) => {
  const { photo, comments } = dados;
  const {dadosUsuario, verificaLogin} = React.useContext(UserContext);
  const {request, carregando} = useFecth();

  const apagarFoto = async () => {
    const alertResposta = window.confirm(`Deseja apagar a foto ${photo.title}???`);
    
    if(alertResposta){
      
      const {url, options} = DELETE_PHOTO(photo.id);
      const {response} = await request(url, options);

      if(response.ok) window.location.reload();
    }

  }

  return (
    <C.FotoContainer>
      <C.FotoItem>
        <Imagem src={photo.src} alt={photo.title}/>
      </C.FotoItem>
      <C.Informacoes>
        <C.InfoPostagem>
          { (dadosUsuario && dadosUsuario.username !== photo.author) ? <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link> : undefined}
          { (dadosUsuario && dadosUsuario.username === photo.author) ? <C.BotaoApagar onClick={apagarFoto}>Apagar</C.BotaoApagar> : undefined}
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
      {verificaLogin ? <FotoComentarios id={photo.id} comments={comments} /> : undefined}
      {carregando ? <Loader /> : undefined}
    </C.FotoContainer>
  );
};

export default FotoContainer;
