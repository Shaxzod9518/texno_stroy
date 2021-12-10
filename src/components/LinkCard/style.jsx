import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
    display: block;
    padding: 24px 16px;
    background-color: white;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: #555A74;
    border-radius: 8px;
    border: 1px solid white;

    &:hover {
        color: #1F273E;
        border-color:#0D69D7;
    }

    &.is-active {
        background: #0D69D7;
        color: white;
        border-color: #0D69D7;
    }
`;

