import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Navbar = styled.nav`
    padding: 12px 16px;
    border-radius: 8px;
    background-color: #fff;
    max-width: 600px;
`

export const Header = styled.header`
    padding-bottom: 9px;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
`

export const Heading = styled.h5`
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: #1f273e;
    margin-bottom: 4px;
`

export const Paragraph = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 12px;
    color: #555a74;
    max-width: 223px;

    @media only screen and (max-width: 1302px) {
        font-size: 12px;
        line-height: 15px;
    }
`

export const Link = styled(NavLink)`
    display: block;

    &.is-active ${Heading} {
        color: #dc1e33;
    }
`

export const Button = styled.button`
    border: none;
    background-color: transparent;
`

export const List = styled.ul`
    list-style-type: none;
    padding-left: 0;
`

export const ListItem = styled.li`
    border-top: 1px solid #C4C8D1;
    padding: 24px;
`

export const ItemLink = styled(NavLink)`
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: #555a74;

    &.is-active {
        color: #dc1e33;
    }
`
