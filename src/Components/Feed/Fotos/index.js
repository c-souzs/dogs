import React from "react";
import { Perro } from "../../../globalStyles";
import useFecth from "../../../Hooks/useFecth";
import { GET_PHOTOS } from "../../../services/api";
import Loader from "../../Lodaer";
import Foto from "../Foto";
import * as C from "./style.js";

const Fotos = ({user, setModalFoto}) => {
  const { carregando, erro, request, dados } = useFecth();

  React.useEffect(() => {
    const buscarFotos = async () => {
      const { url, options } = GET_PHOTOS({ page: 1, total: 6, user});
      const { response, json } = await request(url, options);
    };
    buscarFotos();
  }, [request]);

  if (erro) return <Perro>{erro}</Perro>;
  if (carregando) return <Loader />;
  if (dados)
    return (
      <C.ListaFotos>
        {dados.map((dadosFoto) => {
          return <Foto key={dadosFoto.id} foto={dadosFoto} setModalFoto={setModalFoto}/>;
        })}
      </C.ListaFotos>
    );
  else return null;
};

export default Fotos;
