import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    width: 100%;
    max-width: 380px;
    text-align: center;
    border-radius: 16px;
    padding: 24px 16px 16px;
    background-color: #fff;
    border: 1px solid #fff;

    &:hover{
        border-color: #0d69d7;
    }

    @media only screen and (max-width: 576px) {
        padding: 16px 8px;
    }
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    max-width: 152px;
    max-height: 152px;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;

    @media only screen and (max-width: 576px) {
        width: 98px;
        height: 98px;
    }
`;

export const Heading = styled.h4`
    color: #1F273E;
    font-size: 24px;
    font-weight: 600;
    margin-top: 26px;
    line-height: 29px;

    @media only screen and (max-width: 576px) {
        font-size: 16px;
        line-height: 19px;
        margin-top: 8px;
    }
`;

export const Span = styled.span`
    margin: 4px 0;
    display: block;
    color: #0d69d7;
    font-size: 12px;
    font-weight: 400;
    
    @media only screen and (max-width: 576px) {
        font-size: 8px;
        line-height: 10px;
        margin: 2px 0;
    }
`;


export const Paragraph = styled.p`
    color: #1F273E;
    font-size: 16px;
    line-height: 19px;
    font-weight: 400;

    @media only screen and (max-width: 576px) {
        font-size: 12px;
        line-height: 15px;
        word-break: break-all;
    }
`;



