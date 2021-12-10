import styled, { css } from 'styled-components'

const StyledItemMutual = css`
    border-radius: 8px;
`

export const StyledHeaderContainer = styled.div`
    background-color: #e5e5e5;
    position: relative;
    padding-top: 80px;
    padding-bottom: 80px;
    overflow: hidden;
`

export const StyledShadow = styled.div`
    position: absolute;
    width: 1570px;
    height: 846px;
    left: 726px;
    top: 477px;
    background: radial-gradient(
        50% 50% at 50% 50%,
        #1e6adc 0%,
        rgba(196, 196, 196, 0) 100%
    );
`

export const StyledHeader = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(2, 193px);
    grid-gap: 20px;

    @media only screen and (max-width: 816px) {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 150px auto 150px;
        grid-gap: 16px;
    }
`

export const StyledItem = styled.img`
    ${StyledItemMutual}
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;

    &:nth-child(1) {
        grid-row: 1 / 2 span;
    }

    &:nth-child(4) {
        grid-area: 1 / 4 / 2 span / 1 span;
    }

    &:nth-child(5) {
        grid-column: 5 / 2 span;
    }

    @media only screen and (max-width: 816px) {
        display: none;

        &:nth-child(1) {
            display: block;
            grid-area: 1 / 1 / 1 span / 1 span;
        }

        &:nth-child(2) {
            display: block;
            grid-area: 1 / 2 / 1 span / 1 span;
        }
        &:nth-child(3) {
            display: block;
            grid-area: 3 / 1 / 1 span / 2 span;
        }
    }
`

export const StyledItemFeatured = styled.div`
    ${StyledItemMutual}

    background-color: #1F273E;
    grid-column: 2 / 2 span;
    padding: 16px;

    @media only screen and (max-width: 816px) {
        grid-area: 2 / 1 / 1 span / 2 span;
    }
`

export const StyledTitle = styled.h1`
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    color: #ffffff;
    margin-top: 0;
    margin-bottom: 0;

    @media only screen and (ma-width: 816px) {
        font-size: 22px;
        line-height: 27px;
    }
`
