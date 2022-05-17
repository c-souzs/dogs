import { Link } from "react-router-dom";
import styled from "styled-components";

export const Footer = styled.footer`
  background: #fb1;
  padding: 3rem 1rem 0;
  height: 8rem;
  text-align: center;
  color: #764701;
`;

export const LinkFooter = styled(Link)`
  display: inline-block;
`;

export const FooterDireitosReservados = styled.span`
  margin-top: 1rem;
  display: block;
`;

export const FooterData = styled.p`
  display: inline-block;
  font-weight: 700;
`;
