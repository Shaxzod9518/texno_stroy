import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    padding-top: 64px;
    padding-bottom: 120px;
    overflow: hidden;
`;

export const List = styled.ul`
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    gap: 18px;
    z-index: 1;
    padding-left: 0;

    @media only screen and (max-width: 576px){
        gap: 16px;
    }
`;

export const ListItem = styled.li`
    width: calc((100% - 3 * 18px) / 4);
    @media only screen and (max-width: 576px){
        width: calc((100% - 16px) / 2);
    }
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