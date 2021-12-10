import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledBottomBarBackground = styled.div`
    background-color: #1f273e;
    position: relative;
`

export const StyledBottomBarWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px 0 25px 0;
    @media (max-width: 1302px) {
        display: block;
        padding: 24px 0 16px 0;
    }
`

export const StyledLeftSide = styled.div`
    @media (max-width: 1302px) {
        display: flex;
        justify-content: center;
        padding-top: 56px;
    }
`

export const StyledParagraph = styled.p`
    max-width: 580px;
    color: #ffffff;
    font-size: 12px;
    line-height: 1.4;
    font-weight: 400;
`

export const StyledRightSide = styled.div`
    @media (max-width: 1302px) {
        position: absolute;
        top: 24px;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        justify-content: center;
        height: 32px;
    }
`

export const StyledLink = styled(Link)`
    &:not(:last-child) {
        margin-right: 8px;
    }
`

export const StyledImage = styled.img`
    width: 32px;
    height: 32px;
`
