import React from "react";
import Loader from "../../../Components/Lodaer";
import { Perro } from "../../../globalStyles";
import useFecth from "../../../Hooks/useFecth";
import { GET_STATS } from "../../../services/api";
const Graficos = React.lazy(() => import('./Graficos'));

const Estatisticas = () => {
  const { request, carregando, erro, dados } = useFecth();

  React.useEffect(() => {
    const buscarDados = async () => {
      const { url, options } = GET_STATS();
      const { json, response } = await request(url, options);
    };
    buscarDados();
  }, [request]);

  if (carregando) return <Loader></Loader>;
  if (erro) return <Perro> {erro}</Perro>;
  if (dados && dados.length) return <React.Suspense fallback={<div></div>}><Graficos dados={dados} /></React.Suspense>;
  if (dados && !dados.length) return <p style={{fontSize: '1.3rem', margin: '2rem 0', textAlign: 'center'}}>Não há postagem para acessar estatísticas :(</p>;
  else return null;
};

export default Estatisticas;
