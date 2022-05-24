import React from "react";
import { VictoryBar, VictoryChart, VictoryPie } from "victory";
import Head from "../../../../Components/Head/index.js";
import * as C from "./style.js";

function Graficos({ dados }) {
  const [infoG, setInfoG] = React.useState([]);
  const [acessos, setAcessos] = React.useState(0);

  React.useEffect(() => {
    const calculoAcessos = dados.reduce((acumulador, item) => {
        const acessosNumero = Number(item.acessos);
        return (acumulador += acessosNumero);
      }, 0);
      const dadosGraficos = dados.map((item) => {
        return {
          x: item.title,
          y: Number(item.acessos),
        };
      });

      setInfoG(dadosGraficos);
      setAcessos(calculoAcessos);
  }, [dados]);

  const efeitos = {
    boxShadow: "0 10px 20px rgb(0 0 0 / 10%)",
    borderRadius: "0.2rem",
    display: "grid",
    alignItems: "center",
  };
  return (
    <C.ContainerGrid as="section">
      <Head title='Suas estatísticas' description='Página de estatísticas do site dogs.'/>
      <C.Acessos style={{ ...efeitos }}>Acessos: {acessos}</C.Acessos>
      <div style={{ ...efeitos }}>
        <VictoryPie
          data={infoG}
          innerRadius={50}
          padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
          style={{
            data: {
              fillOpacity: 0.9,
              stroke: "#fff",
              strokeWidth: 2,
            },
            labels: {
              fontSize: 14,
              fill: "#333",
            },
          }}
        />
      </div>
      <div style={{ ...efeitos }}>
        <VictoryChart>
          <VictoryBar alignment="start" data={infoG} />
        </VictoryChart>
      </div>
    </C.ContainerGrid>
  );
}

export default Graficos;
