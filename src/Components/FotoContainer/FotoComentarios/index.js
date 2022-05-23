import React from "react";
import FormComentarios from "../FotoComentariosForm";
import * as C from "./style.js";

const FotoComentarios = ({ id, comments, fotoUnica }) => {
  const [comentarios, setComentarios] = React.useState(comments);
  const areaComentario = React.useRef(null);
  
  React.useEffect(() => {
    const altura = areaComentario.current.scrollHeight;
    areaComentario.current.scrollTo(0, altura);
  }, [comentarios]);

  return (
    <>
      <C.Container ref={areaComentario} fotoUnica={fotoUnica}>
        <C.Comentarios fotoUnica={fotoUnica}>
          {comentarios.map((comentario) => (
            <C.Comentario key={comentario.comment_ID}>
              <C.Conteudo>
                <C.Autor>{comentario.comment_author}:</C.Autor>
                {comentario.comment_content}
              </C.Conteudo>
            </C.Comentario>
          ))}
        </C.Comentarios>
      </C.Container>
      <FormComentarios idFoto={id} setComentarios={setComentarios} fotoUnica={fotoUnica}/>
    </>
  );
};

export default FotoComentarios;
