import styled from "styled-components";

export const Background = styled.div`
    background-color: #1F273E;

    @media only screen and (max-width: 1302px) {
        display: none;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 10px;
    padding-bottom: 10px;
`;

export const ElementsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Image = styled.img`
    margin-right: 8px;
`;

export const Toptext = styled.p`
    color: #fff;
    font-size: 12px;
    font-weight: 400;
`;

export const Link = styled.a`
    color: #fff;
    font-size: 12px;
    font-weight: 400;
`;

export const RightSide = styled.div`
    display: flex;
`;

export const RightElementsWrapper = styled(ElementsWrapper)`
    &:not(:last-child) {
        margin-right: 65px;
    }
`;

export const Lang = styled(RightElementsWrapper)`
    position: relative;
`;

export const LangHeader = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`;

export const ToptextLang = styled(Toptext)`
    margin-right: 4px;
`;

export const LangMenu = styled.ul`
    display: ${ props => props.active ? "block" : "none" };
    list-style-type: none;
    border-radius: 16px;
    padding: 16px;
    background: #FFFFFF;
    box-shadow: 0px 10px 30px rgba(17, 23, 46, 0.3);
    position: absolute;
    top: calc(100% + 10px);
    right: 50%;
    z-index: 99;
    transform: translateX(50%);
    row-gap: 8px;
`;

export const LangMenuItem = styled.li`
    display: flex;
    align-items: center;
    padding: 12px 30px;
    border-radius: 8px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    cursor: pointer;
    ${ props => props.active ? 
        "background-color: #0D69D7; color: white;" : 
        "background-color: #FFFFFF; color: #1F273E;" }
`;