import styled from "styled-components";

export const StyledContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 16px;
    background: #fff;
    max-width: 360px;
    overflow: hidden;
    padding: ${ props => props.padding ? "22px 32px" : "0" };

    &:hover {
        cursor: pointer;
        box-shadow: ${ props => props.padding ? 
            "0px 0px 0px 1px #0D69D7;" : 
            "0px 0px 0px 4px #0D69D7;"
        }
    }

    @media only screen and (max-width: 576px) {
        border-radius: 6.8px;
    }
`;

export const StyledShadow = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 16px;
    top: 0;
    left: 0;

    ${ StyledContainer }:hover &{
        box-shadow: ${ props => props.padding ?
            "inset 0 0 0 1px #1e6adc" :
            "inset 0 0 0 4px #1e6adc"
        };
    }

    @media only screen and (max-width: 576px) {
        border-radius: 6.8px;
    }
`;


export const StyledImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
`;

export const StyledIcon = styled.div`
    display: none;
    position: absolute;
    width: 24px;
    height: 24px;
    background: #f0f5fb;
    border-radius: 4px;
    right: 16px;
    top: 16px;
    align-items: center;
    justify-content: center;

    img {
        width: 13px;
        height: 13px;
    }

    ${StyledContainer}:hover & {
        display: flex;
    }
`;