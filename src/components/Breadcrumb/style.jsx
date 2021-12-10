import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledNavbar = styled.nav`
    border-bottom: 1px solid #C4C8D1;
    padding-top: 20px;
    padding-bottom: 20px;

    @media only screen and (max-width: 816px) {
        display: none;
    }
`;

export const StyledList = styled.ul`
    list-style-type: none;
    padding-left: 0;
`;

export const StyledListItem = styled.li`
    display: inline-block;

    &:not(:last-child) {
        margin-right: 12px;
    }

    &:last-child a {
        color: #DC1E33;
        cursor: initial;
    }
`;

export const StyledListLink = styled(Link)`
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
    color: #1F273E;
    text-decoration: none;
    user-select: none;
`;

export const StyledListArrow = styled.span`
    margin-left: 12px;
`;