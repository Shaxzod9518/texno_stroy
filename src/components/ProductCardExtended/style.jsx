import styled from 'styled-components'

export const StyledContainer = styled.div`
    max-width: 830px;
    background: #ffffff;
    display: flex;
    column-gap: 16px;
    padding: 16px;
    border: 1px solid #fff;
    border-radius: 8px;

    &:hover {
        border: 1px solid #0d69d7;
        border-radius: 8px;
    }
`

export const StyledImageContainer = styled.div`
    height: 100%;
    min-width: 201px;
    max-height: 201px;
    border: 1px solid #eaecef;
    box-sizing: border-box;
    border-radius: 4px;
    padding: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    @media only screen and (max-width: 816px) {
        min-width: 74px;
        max-height: 74px;
    }
`

export const StyledImage = styled.img`
    width: 100%;
    height: 201px;
    object-fit: cover;
    object-position: center;
`

export const StyledProduct = styled.h2`
    font-weight: 600;
    font-size: 24px;
    line-height: 22px;
    color: #1f273e;
    margin-bottom: 16px;
`

export const StyledInfo = styled.div`
    color: #555a74;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    
    strong {
        font-weight: 700;
    }

    @media only screen and (max-width: 816px) {
        margin-top: 64px;
        margin-left: -90px;
    }
`
