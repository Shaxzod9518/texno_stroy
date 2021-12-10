import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

export const Container = styled.div`
    z-index: 10000;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(5, 8, 16, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Slider = styled.div`
    position: relative;
    width: 752px;
    border-radius: 16px;
    background-color: #1f273e;

    @media only screen and (max-width: 1302px) {
        width: 544px;
    }

    @media only screen and (max-width: 816px) {
        width: calc(100% - 32px);
    }
`

const ButtonStyle = css`
    position: absolute;
    width: 48px;
    height: 48px;
    background: #ffffff;
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    left: calc(100% + 8px);

    @media only screen and (max-width: 816px) {
        left: unset;
        bottom: calc(100% + 8px);
    }
`

export const CloseButton = styled.button`
    ${ButtonStyle}

    @media only screen and (max-width: 816px) {
        right: 0;
    }
`

export const CopyButton = styled.button`
    ${ButtonStyle}
    top: 56px;

    @media only screen and (max-width: 816px) {
        top: unset;
        right: 56px;
    }
`

export const DownloadButton = styled(Link)`
    ${ButtonStyle}
    top: 112px;

    @media only screen and (max-width: 816px) {
        top: unset;
        right: 112px;
    }
`

export const Header = styled.header`
    position: relative;
    padding: 16px;
    height: 100%;
    overflow: hidden;

    &::before {
        position: absolute;
        content: '';
        top: 16px;
        left: 16px;
        right: 16px;
        height: 148px;
        background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.6) 0%,
            rgba(196, 196, 196, 0) 100%
        );

        @media only screen and (max-width: 816px) {
            top: 8px;
            left: 8px;
            right: 8px;
        }
    }

    &::after {
        position: absolute;
        content: '';
        bottom: 16px;
        left: 16px;
        right: 16px;
        height: 148px;
        background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.6) 0%,
            rgba(196, 196, 196, 0) 100%
        );
        transform: matrix(1, 0, 0, -1, 0, 0);

        @media only screen and (max-width: 816px) {
            bottom: 8px;
            left: 8px;
            right: 8px;
        }
    }

    @media only screen and (max-width: 816px) {
        padding: 8px;
    }
`

export const Meta = styled.h6`
    position: absolute;
    top: 27px;
    left: 16px;
    right: 16px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: #ffffff;
`

export const Caption = styled.h6`
    position: absolute;
    bottom: 27px;
    left: 16px;
    right: 16px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: #ffffff;
    z-index: 1;
`

export const Button = styled.button`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 48px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    border: none;
    cursor: pointer;

    &:first-of-type {
        left: 24px;
    }

    &:last-of-type {
        right: 24px;
    }
`

export const Image = styled.img`
    display: block;
    width: 100%;
    height: 576px;
    object-fit: cover;
    object-position: center;
    border-radius: 6px;

    @media only screen and (max-width: 1302px) {
        height: 435px;
    }

    @media only screen and (max-width: 816px) {
        height: 262px;
    }
`

export const Footer = styled.footer`
    width: 100%;
    overflow: hidden;
`

export const List = styled.ul`
    position: relative;
    left: 0;
    width: max-content;
    padding: 0 0 16px 16px;
    list-style-type: none;
    display: flex;
    column-gap: 8px;

    @media only screen and (max-width: 816px) {
        column-gap: 4px;
        padding: 0 0 8px 8px;
    }
`

export const ListItem = styled.li`
    width: 147px;
    height: 119px;
    cursor: pointer;

    @media only screen and (max-width: 1302px) {
        width: 111px;
        height: 90px;
    }

    @media only screen and (max-width: 816px) {
        width: 66px;
        height: 53px;
    }
`

export const SlideImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 8px;
    border: ${(props) => (props.active ? '4px solid #0D69D7' : '4px solid transparent')};
`
