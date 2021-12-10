import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Overflow = styled.div`
    width: 100%;
    overflow: hidden;
    background-color: white;
    position: ${(props) => (props.fixed ? 'fixed' : 'static')};
    z-index: 101;

    @media only screen and (max-width: 1302px) {
        overflow: initial;
    }
`

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    position: relative;
`

export const Logo = styled.img`
    padding-top: 14px;
    padding-bottom: 13px;
`

export const MenuIcon = styled.img`
    display: none;

    @media only screen and (max-width: 1302px) {
        display: block;
    }
`

export const Menus = styled.ul`
    list-style-type: none;
    padding-left: 0;
    display: flex;

    @media only screen and (max-width: 1302px) {
        display: ${(props) => (props.active ? 'flex' : 'none')};
        position: fixed;
        top: 92px;
        right: 0;
        bottom: 0;
        z-index: 99;
        background-color: white;
        width: 520px;
        flex-direction: column;
        padding: 50px 128px 50px 48px;
    }

    @media only screen and (max-width: 816px) {
        width: 100%;
        padding: 56px 16px;
    }
`

export const ListItem = styled.li`
    &:not(:last-child) {
        margin-right: 42px;
    }

    &:last-child {
        display: none;
    }

    @media only screen and (max-width: 1302px) {
        display: inline-block;
        margin-left: auto;

        &:not(:last-child) {
            margin-right: 0;
            margin-bottom: 32px;
        }

        &:last-child {
            display: block;
            margin-bottom: 38px;
        }
    }

    @media only screen and (max-width: 816px) {
        margin-right: auto !important;
        margin-left: auto !important;
    }
`

export const Link = styled(NavLink)`
    font-size: 16px;
    line-height: 19px;
    font-weight: 500;
    color: #1f273e;
    text-decoration: none;
    height: 100%;
    display: flex;
    align-items: center;
    text-transform: uppercase;
    white-space: nowrap;
    transition: all 0.1s ease-in-out;

    &:hover {
        color: #dc1e33;
        transform: translateY(-2px);
    }

    &.is-active {
        position: relative;
        bottom: 0;
        color: #dc1e33;

        &::after {
            position: absolute;
            content: '';
            top: calc(100% + 2px);
            right: 50%;
            width: 92px;
            height: 45px;
            border-radius: 50%;
            box-shadow: 0 0px 23px #dc1e33;
            transform: translateX(50%);
        }
    }

    @media only screen and (max-width: 1302px) {
        font-size: 32px;
        line-height: 39px;

        &.is-active::after {
            display: none;
        }
    }

    @media only screen and (max-width: 816px) {
        font-size: 24px;
        line-height: 29px;
    }
`

export const LangMenu = styled.ul`
    list-style-type: none;
    background: #ffffff;
`

export const LangMenuItem = styled.li`
    display: flex;
    align-items: center;
    padding: 10px 26px;
    border-radius: 8px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    cursor: pointer;
    border: 1px solid #C4C8D1;
    ${(props) =>
        props.active
            ? 'background-color: #0D69D7; color: white;'
            : 'background-color: #FFFFFF; color: #1F273E;'}

    &:first-child {
        margin-bottom: 16px;
    }
`

export const Image = styled.img`
    margin-right: 8px;
`
