import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../Components/Forms/Button";
import Input from "../../../Components/Forms/Input";
import { Perro, Titulo } from "../../../globalStyles";
import useFecth from "../../../Hooks/useFecth";
import useForm from "../../../Hooks/useForm";
import { LOST_PASSWORD } from "../../../services/api";

const Resetar = () => {
  const [login, setLogin] = React.useState("");
  const [key, setKey] = React.useState("");
  const novaSenha = useForm();
  const { erro, carregando, request } = useFecth();
  const navegar = useNavigate();

  React.useEffect(() => {
    const parametro = new URLSearchParams(window.location.search);
    const key = parametro.get("key");
    const login = parametro.get("key");

    if (key) setKey(key);
    if (login) setLogin(login);
  }, []);

  const mudarSenha = async (e) => {
    e.preventDefault();

    if (novaSenha.validarAt()) {
      const { url, options } = LOST_PASSWORD({
        login,
        key,
        password: novaSenha.valor,
      });

      const { response } = await request(url, options);
      if (response.ok) navegar("/login");
    }
  };

  return (
    <>
      <Titulo>Recupere sua conta.</Titulo>
      <form onSubmit={mudarSenha}>
        <Input
          label="Nova senha"
          type="password"
          name="password"
          {...novaSenha}
        />
        {carregando ? (
          <Button disabled="disabled">Resetando...</Button>
        ) : (
          <Button>Cadastre-se</Button>
        )}
        {erro ? <Perro>{erro}</Perro> : ""}
      </form>
    </>
  );
};

export default Resetar;
