import React from "react";
import * as C from "./style.js";

const Imagem = ({ alt, ...props }) => {
  const [carregando, setCarregando] = React.useState(true);

  const carregamentoCompleto = ({ target }) => {
    setCarregando(false);
    target.style.opacity = 1;
  };

  return (
    <C.Container>
      {carregando ? <C.EsqueletoAnimacao></C.EsqueletoAnimacao> : undefined}
      <C.Imagem onLoad={carregamentoCompleto} alt={alt} {...props} />
    </C.Container>
  );
};

export default Imagem;
