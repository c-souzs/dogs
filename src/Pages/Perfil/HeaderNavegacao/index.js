import React from "react";
import { Titulo } from "../../../globalStyles";
import { ReactComponent as IconeFeed } from "../../../assets/feed.svg";
import { ReactComponent as IconeEstatisticas } from "../../../assets/estatisticas.svg";
import { ReactComponent as IconeAdicionar } from "../../../assets/adicionar.svg";
import { ReactComponent as IconeSair } from "../../../assets/sair.svg";
import * as C from "./style.js";
import { UserContext } from "../../../store/UserContext";
import useMedia from "../../../Hooks/useMedia";
import { useLocation } from "react-router-dom";

const HeaderNavegacao = ({ titulo }) => {
  const { removerLoginUsuario } = React.useContext(UserContext);
  const mobile = useMedia('(max-width: 40rem)');
  const [mobileAtivo, setMobileAtivo] = React.useState(false);

  const {pathname} = useLocation();

  React.useEffect(() => {
    setMobileAtivo(false);
  }, [pathname]);

  const Nav = mobile ? C.NavMobile : C.Nav ; 
  return (
    <C.Header>
      <Titulo>{titulo}</Titulo>
      {mobile && <C.BtnMobile as='button' ativo={mobileAtivo} aria-label="Menu" onClick={() => setMobileAtivo(!mobileAtivo)}></C.BtnMobile>}
      <Nav style={mobileAtivo ? {opacity: '1', transform: 'initial', pointerEvents: 'initial'} : {}}>
        <C.LinkHeader to="/perfil" end>
          {" "}
          <IconeFeed />{" "}
          {mobile && 'Minhas fotos'}
        </C.LinkHeader>
        <C.LinkHeader to="/perfil/estatisticas" end>
          {" "}
          <IconeEstatisticas />{" "}
          {mobile && 'Estatísticas'}
        </C.LinkHeader>
        <C.LinkHeader to="/perfil/postar" end>
          {" "}
          <IconeAdicionar />{" "}
          {mobile && 'Postar foto'}
        </C.LinkHeader>
        <C.BotaoSair as="button" onClick={() => removerLoginUsuario()}>
          {" "}
          <IconeSair />{" "}
          {mobile && 'Sair'}
        </C.BotaoSair>
      </Nav>
    </C.Header>
  );
};

export default HeaderNavegacao;
