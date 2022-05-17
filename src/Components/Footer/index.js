import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/dogs.svg";
import * as C from "./style.js";

const Footer = () => {
  const dadosData = new Date();
  return (
    <C.Footer>
      <C.LinkFooter to="/">
          <img src={logo} alt="Logo da rede social em svg" />
        </C.LinkFooter>
      <C.FooterDireitosReservados>
        Dogs - Alguns direitos reservados © - <C.FooterData>{dadosData.getFullYear()}</C.FooterData>
      </C.FooterDireitosReservados>
    </C.Footer>
  );
};

export default Footer;
