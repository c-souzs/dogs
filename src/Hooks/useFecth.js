import React from "react";

const useFecth = () => {
  const [dados, setDados] = React.useState(null);
  const [erro, setErro] = React.useState(null);
  const [carregando, setCarregando] = React.useState(false);

  // Tenta buscar os dados na url, setando os estatos básico. É feito também o tratamento de erros e etc. Os dados retornados são para controle.
  // Há um bug básico do react que deve ser resolvido
  const request = React.useCallback(async (url, options) => {
    let response;
    let json;

    try {
      setDados(null);
      setErro(null);
      setCarregando(true);

      response = await fetch(url, options);
      json = await response.json();

      if (!response.ok) throw new Error(json.message);
    } catch (error) {
      json = null;
      setErro(error.message);
    } finally {
      setCarregando(false);
      setDados(json);
      return {response, json}
    }
  }, []);

  return {
    dados,
    erro,
    carregando,
    request,
  };
};

export default useFecth;
