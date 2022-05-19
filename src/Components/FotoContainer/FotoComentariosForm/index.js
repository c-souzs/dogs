import React from "react";
import { Perro } from "../../../globalStyles";
import useFecth from "../../../Hooks/useFecth";
import { POST_COMMENT } from "../../../services/api";
import * as C from "./style.js";

const FormComentarios = ({ idFoto, setComentarios }) => {
  const [comment, setComment] = React.useState("");
  const { request, carregando, erro } = useFecth();
  const inputComentario = React.useRef(null);

  React.useEffect(() => {
    inputComentario.current.focus();
  }, []);

  const enviarComentario = async (e) => {
    e.preventDefault();
    const { url, options } = POST_COMMENT(idFoto, { comment });
    const { response, json } = await request(url, options);

    if (response.ok) {
      setComment("");
      setComentarios((comentarios) => [...comentarios, json]);
      inputComentario.current.focus();
    }
  };

  return (
    <C.Formulario onSubmit={enviarComentario}>
      <C.TextArea
      ref={inputComentario}
        id="comment"
        name="comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      ></C.TextArea>
      {carregando ? <C.BotaoAnimado><C.SvgBotao /></C.BotaoAnimado> : <C.Botao><C.SvgBotao /></C.Botao>}
      {erro ? <Perro> {erro} </Perro> : undefined}
    </C.Formulario>
  );
};

export default FormComentarios;
