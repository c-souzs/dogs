import React from 'react'
import { Titulo } from '../../../globalStyles'
import { ReactComponent as IconeFeed } from '../../../assets/feed.svg';
import { ReactComponent as IconeEstatisticas } from '../../../assets/estatisticas.svg';
import { ReactComponent as IconeAdicionar } from '../../../assets/adicionar.svg';
import { ReactComponent as IconeSair } from '../../../assets/sair.svg';
import * as C from "./style.js";
import { UserContext } from '../../../store/UserContext';

const HeaderNavegacao = ({titulo}) => {
    const {removerLoginUsuario} = React.useContext(UserContext);

  return (
    <C.Header>
        <Titulo>{titulo}</Titulo>
        <C.Nav>
            <C.LinkHeader  to='/perfil' end> <IconeFeed/> </C.LinkHeader>
            <C.LinkHeader to='/perfil/estatisticas' end> <IconeEstatisticas/> </C.LinkHeader>
            <C.LinkHeader to='/perfil/postar' end> <IconeAdicionar/> </C.LinkHeader>
            <C.BotaoSair as='button' onClick={() => removerLoginUsuario()}> <IconeSair/> </C.BotaoSair>
        </C.Nav>
    </C.Header>
  )
}

export default HeaderNavegacao