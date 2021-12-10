import styled from "styled-components";

export const StyledCard = styled.div`
    width: 830px;
    background: #ffffff;
    display: flex;
    column-gap: 16px;
    padding: 16px;
    margin: 20px;
    border: 1px solid #fff;
    border-radius: 8px;
    &:hover {
        border: 1px solid #0d69d7;
        border-radius: 8px;
    }
`;

export const StyledCardImageContainer = styled.div`
    width: 201px;
    min-width: 201px;
    border: 1px solid #eaecef;
    box-sizing: border-box;
    border-radius: 4px;
    padding: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const StyledCardImage = styled.img`
     transform: rotate(1.26deg);
`;

export const StyledCardProduct = styled.h2`
    font-weight: 600;
    font-size: 24px;
    line-height: 22px;
    color: #1f273e;
    margin-bottom: 16px;
`;

export const StyledCardInfo = styled.p`
    color: #555a74;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
`;
