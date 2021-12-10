import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    background: #ffffff;
    border: 1px solid #eaecef;
    box-sizing: border-box;
    border-radius: 8px;
    position: relative;
    font-family: 'Inter', sans-serif;
    overflow: hidden;

    &:hover Button {
        background: rgba(13, 105, 215, 1);
        color: #ffffff;
    }

    &:hover {
        border: 1px solid #0d69d7;
        box-sizing: border-box;
        border-radius: 8px;
    }
`

export const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 4px;
`

export const Image = styled.img`
    width: 100%;
    height: 174px;
    object-fit: contain;
    object-position: center;
`

export const Button = styled.button`
    max-width: 100%;
    width: 100%;
    height: 55px;
    text-align: center;
    background: #f0f5fb;
    border: 0.645485px solid #eaecef;
    border-radius: 4px;
    outline: none;
    transition: background ease-in-out 0.2s;
    font-size: 14px;
    line-height: 17px;
`

export const Hover = styled.img`
    position: absolute;
    background: rgba(240, 245, 251, 1);
    z-index: 9999;
    width: 23px;
    height: 23px;
    right: 8px;
    top: 8px;
    cursor: pointer;
    transition: background ease-in-out 0.2s;
`
