import React from "react";
import Button from "../../../Components/Forms/Button";
import Input from "../../../Components/Forms/Input";
import { Perro, Titulo } from "../../../globalStyles";
import useFecth from "../../../Hooks/useFecth";
import useForm from "../../../Hooks/useForm";
import { POST_USER } from "../../../services/api";
import { UserContext } from "../../../store/UserContext";

const Criar = () => {
  const ctx = React.useContext(UserContext);

  const usuario = useForm();
  const email = useForm("email");
  const password = useForm();
  const { request, erro, carregando } = useFecth();

  // Valida os campos normal. Pega os dados cadastros e manda para a API, quando for cadastrado é chamado a função que faz o login automatico.
  const enviarDados = async (e) => {
    e.preventDefault();

    if (usuario.validarAt() && email.validarAt() && password.validarAt()) {
      const { url, options } = POST_USER({
        username: usuario.valor,
        email: email.valor,
        password: password.valor,
      });
      const { response } = await request(url, options);

      if (!response.ok) return;
      ctx.logarUsuario({ username: usuario.valor, password: password.valor });
    }
  };
  return (
    <>
      <Titulo>Cadastre-se</Titulo>
      <form onSubmit={enviarDados}>
        <Input label="Usuário" name="userName" {...usuario} />
        <Input
          type="email"
          label="Email"
          name="email"
          required="required"
          {...email}
        />
        <Input type="password" label="Senha" name="password" {...password} />
        {carregando || ctx.carregando ? (
          <Button disabled="disabled">Cadastrando...</Button>
        ) : (
          <Button>Cadastre-se</Button>
        )}
        {erro ? <Perro>{erro}</Perro> : ""}
        {ctx.erro ? <Perro>{ctx.erro}</Perro> : ""}
      </form>
    </>
  );
};

export default Criar;
