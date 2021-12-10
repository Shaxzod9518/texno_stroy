import styled from 'styled-components'

export const Container = styled.div`
    background: rgba(255, 255, 255, 1);
    border-radius: 5px;
    border: 1px solid #fff;

    &:hover {
        border: 1px solid #0d69d7;
    }
`
export const Card = styled.div`
    background: rgba(255, 255, 255, 1);
    display: flex;
    border-radius: 5px;
`
export const Header = styled.div`
    background: rgba(255, 255, 255, 1);
    border: 1px solid #eaecef;
    width: 120px;
    height: 120px;
    margin: 8px 24px 8px 8px;
    border-radius: 4px;
    display: flex;
    justify-content: center;

    @media only screen and (max-width: 816px) {
        width: 74px;
        min-width: 74px;
        height: 74px;
        margin: 5px 20px 5px 5px;
    }
`
export const Body = styled.div`
    background: rgba(255, 255, 255, 1);
    margin: 16px 16px 16px 0;

    @media only screen and (max-width: 816px) {
        margin: 8px 8px 8px 0;
    }
`
export const Image = styled.img`
    border-radius: 4px;
    width: 100%;
    height: 100%;
    max-height: 120px;
    object-fit: cover;
    object-position: center;
    transform: matrix(-1, 0, 0, 1, 0, 0);
`
export const Text = styled.p`
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    text-decoration: none;
    color: rgba(85, 90, 116, 1);

    @media only screen and (max-width: 816px) {
        font-size: 14px;
        line-height: 20px;
    }
`
