import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from '../../globalStyles';

export const Header = styled.header`
    height: 4rem;
    box-shadow: 0 1px 1px rgb(0 0 0 / 10%);
    position: fixed;
    width: 100%;
    z-index: 100;
    background: #fff;
    top: 0;
`;

export const NavContainer = styled(Container)`
    height: inherit;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const LinkFlex = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
`;
