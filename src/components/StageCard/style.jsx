import styled from 'styled-components';

export const StyledContainer = styled.div`
    padding: 16px;
    border-radius: 8px;
    background-color: white;
    width: 100%;
    max-width: 831px;
`;

export const StyledDate = styled.h5`
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    color: #DC1E33;
    margin-bottom: 8px;
`;

export const StyledParagraph = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #1F273E;

    strong {
        font-weight: 600;
    }

    @media only screen and (max-width: 576px) {
        font-size: 12px;
    }
`;