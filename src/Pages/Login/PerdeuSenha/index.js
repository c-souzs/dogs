import React from "react";
import Button from "../../../Components/Forms/Button";
import Input from "../../../Components/Forms/Input";
import { Perro, Titulo } from "../../../globalStyles";
import useFecth from "../../../Hooks/useFecth";
import useForm from "../../../Hooks/useForm";
import { LOST_PASSWORD } from "../../../services/api";

const Perdeu = () => {
  const login = useForm();
  const { request, carregando, erro, dados } = useFecth();

  const recuperarSenha = async (e) => {
    e.preventDefault();

    if (login.validarAt()) {
      const urlRecu = window.location.href.replace("perdeu", "resetar");
      const { url, options } = LOST_PASSWORD({
        login: login.valor,
        url: urlRecu,
      });

      await request(url, options);
    }
  };

  return (
    <>
      <Titulo>Perdeu a senha?</Titulo>
      {dados ? (
        <p style={{ color: "#4c1" }}>{dados}</p>
      ) : (
        <form onSubmit={recuperarSenha}>
          <Input label="Email/Usuário" name="login" {...login} />
          {carregando ? (
            <Button disabled="disabled">Enviar email</Button>
          ) : (
            <Button>Enviar email</Button>
          )}
          {erro ? <Perro>{erro}</Perro> : undefined}
        </form>
      )}
    </>
  );
};

export default Perdeu;
