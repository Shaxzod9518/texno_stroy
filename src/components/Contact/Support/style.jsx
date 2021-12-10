import styled from "styled-components";
import Container from '../../Container';

export const Background = styled.div`
    color: #1F273E;
    background-color: #fff;
`;

export const Wrapper = styled(Container)`
    position: relative;
    display: flex;
    column-gap: 64px;
    @media only screen and (max-width: 816px){
        column-gap: 18px;
    }
`;


export const ImageContainer = styled.div`
    position: relative;
    width: calc((100% - 64px) / 100 * 40);
    @media (max-width: 816px) {
        width: calc((100% - 18px) / 100 * 40);
    }
`;

export const Image = styled.img`
    position: absolute;
    height: calc(100% + 33px);
    top: -33px;

    @media (max-width: 816px) {
        top: -15px;
        height: calc(100% + 15px);
    }
`;

export const Content = styled.div`
    width: calc((100% - 64px) / 100 * 60);
    padding-top: 32px;
    padding-bottom: 42px;

    @media(max-width: 816px) {
        width: calc((100% - 18px) / 100 * 60);
        padding-top: 24px;
        padding-bottom: 16px;
    }
`;

export const Heading = styled.h3`
    font-size: 48px;
    margin-bottom: 37px;
    font-weight: 700;

    @media(max-width: 816px) {
        font-size: 20px;
        position: absolute;
        top: -48px;
        right: 50%;
        transform: translateX(50%);
        white-space: nowrap;
        text-align: center;
    }
`;

export const Icon = styled.img`
    margin-right: 8px;
    width: auto;
    height: 15px;
    object-fit: cover;
    object-position: center;
`;

export const List = styled.ul`
    padding-left: 0;
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: 38px;
    @media only screen and (max-width: 816px){
        row-gap: 8px;
    }
`;

export const ListItem = styled.li`
    font-size: 18px;
    display: flex;

    @media only screen and (max-width: 816px){
        font-size: 12px;
        &:nth-child(2){
            order: 3;
        }
        &:nth-child(3){
            order: 2;
        }
    }
`;


export const Link = styled.a`
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;
    color: #464F6A;
    display: ${ props => props.mobileOnly ? 'none' : 'block' };

    @media only screen and (max-width: 816px) {
        display: block;
        font-size: 12px;
        line-height: 15px;
    }
`;