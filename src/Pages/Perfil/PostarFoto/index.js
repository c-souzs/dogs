import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../Components/Forms/Button";
import Input from "../../../Components/Forms/Input";
import { Perro } from "../../../globalStyles";
import useFecth from "../../../Hooks/useFecth";
import useForm from "../../../Hooks/useForm";
import { POST_PHOT } from "../../../services/api";
import * as C from "./style.js";

function PostarFoto() {
  const nome = useForm();
  const peso = useForm("numero");
  const idade = useForm("numero");
  const [img, setImg] = React.useState(null);
  const { request, carregando, erro } = useFecth();
  const navegar = useNavigate();
  const enviarDados = async (e) => {
    e.preventDefault();

    // Exibir ao usuário caso ele não tenha selecionado uma imagem e os dados
    const formDados = new FormData();
    formDados.append("img", img.raw);
    formDados.append("nome", nome.valor);
    formDados.append("peso", peso.valor);
    formDados.append("idade", idade.valor);

    const { url, options } = POST_PHOT(formDados);
    const {response} = await request(url, options);

    if(response.ok) navegar('/perfil');
  };

  const mostrarPrevia = ({ target }) => {
    const url = target.files[0];
    setImg({
      raw: url,
      preview: URL.createObjectURL(url),
    });
  };

  return (
    <C.Container>
      <C.FormularioLinha onSubmit={enviarDados} linha={img ? false : true}>
        <Input label="Nome" name="nome" {...nome} />
        <C.InputsFlex>
          <Input label="Peso" name="peso" {...peso} />
          <Input label="Idade" name="idade" {...idade} />
        </C.InputsFlex>
        <C.InputFile type="file" name="img" id="img" onChange={mostrarPrevia} />
        {carregando ? (
          <C.BotaoBlock disabled="disabled">Postando...</C.BotaoBlock>
        ) : (
          <C.BotaoBlock>Postar</C.BotaoBlock>
        )}
        {erro ? <Perro>{erro}</Perro> : undefined}
      </C.FormularioLinha>
      {img ? (
        <C.FileBackground src={`${img.preview}`}></C.FileBackground>
      ) : undefined}
    </C.Container>
  );
}

export default PostarFoto;
