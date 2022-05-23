import React from "react";
import Button from "../../../Components/Forms/Button";
import Input from "../../../Components/Forms/Input";
import { Perro, Titulo } from "../../../globalStyles";
import useForm from "../../../Hooks/useForm";
import { UserContext } from "../../../store/UserContext";
import * as C from "./style.js";

const Logar = () => {
  const userName = useForm();
  const password = useForm();

  // Para consumir o contexto geral
  const ctx = React.useContext(UserContext);

  const enviarDados = async (e) => {
    e.preventDefault();

    if (userName.validarAt() && password.validarAt()) {
      const dadosPreenchidos = {
        username: userName.valor,
        password: password.valor,
      };

      ctx.logarUsuario(dadosPreenchidos);
    }
  };

  return (
    <>
      <Titulo>Login</Titulo>
      <form onSubmit={enviarDados}>
        <Input label="Usuário" name="userName" {...userName} />
        <Input type="password" label="Senha" name="password" {...password} />
        {ctx.carregando ? (
          <Button disabled="disabled">Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        {ctx.erro ? <Perro>{ctx.erro}</Perro> : ""}
        <C.LinkRecuperacao to='/login/perdeu'>Perdeu a senha?</C.LinkRecuperacao>
      </form>
      <C.Cadastro>
        <C.CadastroTitulo>Cadastre-se</C.CadastroTitulo>
        <C.CadastroMensagem>
          Ainda não possui conta? Cadastre-se no site.
        </C.CadastroMensagem>
        <C.CadastroLink to="/login/cadastrar">Cadastre-se</C.CadastroLink>
      </C.Cadastro>
    </>
  );
};

export default Logar;
