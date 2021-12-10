import styled from "styled-components";
import Container from "../../components/Container";

export const Background = styled.div`
    background: #f5f5f5;
    position: relative;
    overflow: hidden;
`;

export const CustomContainer = styled(Container)`
    padding-top: 80px;
    padding-bottom: 120px;
    position: relative;
    z-index: 1; 
`;

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 20px; 
    margin-top: 16px;
    margin-bottom: 40px;

    @media only screen and (max-width: 816px) {
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 16px; 
        margin-bottom: 32px;
    }
`;

export const Blog = styled.div`
    display: block;
`;

export const Shadow = styled.div`
    position: absolute;
    width: 1570px;
    height: 846px;
    right: 50%;
    top: 100%;
    transform: translate(50%, -17%);
    background: radial-gradient(50% 50% at 50% 50%, #1E6ADC 0%, rgba(196, 196, 196, 0) 100%);
`;