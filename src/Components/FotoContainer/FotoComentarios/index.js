import React from "react";
import FormComentarios from "../FotoComentariosForm";
import * as C from "./style.js";

const FotoComentarios = ({ id, comments }) => {
  const [comentarios, setComentarios] = React.useState(comments);
  const areaComentario = React.useRef(null);
  
  React.useEffect(() => {
    const altura = areaComentario.current.scrollHeight;
    areaComentario.current.scrollTo(0, altura);
  }, [comentarios]);

  return (
    <>
      <C.Container ref={areaComentario}>
        <C.Comentarios>
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
      <FormComentarios idFoto={id} setComentarios={setComentarios} />
    </>
  );
};

export default FotoComentarios;
