import React from "react";
import { useNavigate } from "react-router-dom";
import useFecth from "../Hooks/useFecth";
import { GET_USER, POST_TOKEN, POST_TOKEN_VALIDADO } from "../services/api";

export const UserContext = React.createContext();

export function UserStorage({ children }) {
  const [verificaLogin, setVerificaLogin] = React.useState(null);
  const [dadosUsuario, setDadosUsuario] = React.useState(null);
  const { request, erro, carregando } = useFecth();
  const navegar = useNavigate();

  // É passado com o useCallBack por ser usada no useEffect
  const removerLoginUsuario = React.useCallback(() => {
    setDadosUsuario(null);
    setVerificaLogin(false);
    localStorage.removeItem("token");
    navegar('/login');
  }, []);

  // Verifica se tem um token no local storage, caso tenha ela valida o token e puxa os dados daquele usuário
  React.useEffect(() => {
    const loginAutomatico = async () => {
      const temToken = localStorage.getItem("token");
      if (!temToken) return;

      const { url, options } = POST_TOKEN_VALIDADO(temToken);
      const { response } = await request(url, options);

      !response.ok ? removerLoginUsuario() : puxarUsuario(temToken);
    };
    loginAutomatico();
  }, [removerLoginUsuario]);

  // Baseado no token ele valida na api
  const puxarUsuario = async (token) => {
    const { url, options } = GET_USER(token);
    const { json } = await request(url, options);
    setDadosUsuario(json);
    setVerificaLogin(true);
  };

  // Baseado nos dados passado, ele busca um token na api
  const logarUsuario = async (dados) => {
    const { url, options } = POST_TOKEN(dados);
    const { response, json } = await request(url, options);
    if (response.ok) {
      localStorage.setItem("token", json.token);
      puxarUsuario(json.token);
      navegar('/conta');
    }
  };

  return (
    <UserContext.Provider
      value={{ logarUsuario, dadosUsuario, verificaLogin, erro, carregando }}
    >
      {children}
    </UserContext.Provider>
  );
}
