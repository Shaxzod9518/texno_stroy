import styled from 'styled-components'
import HeadingTwo from '../HeadingTwo'

export const StyledAboutUsBackground = styled.div`
    background-color: #f5f5f5;
    position: relative;
    z-index: 2;
`

export const StyledAboutUsWrapper = styled.div`
    width: 100%;
    margin: 0 auto;
    padding-bottom: 120px;
`

export const Heading = styled(HeadingTwo)`
    padding-top: 120px;
`

export const StyledVideo = styled.div`
    /* padding-left: 100px; */
`

export const Iframe = styled.iframe`
    margin-right: 20px;
    border: none;
    border-radius: 8px;
`

export const StyledTexts = styled.div`
    width: 100%;
    text-align: center;
`

export const StyledHeading = styled.h2`
    font-size: 32px;
    font-weight: 600;
    color: #1f273e;
    line-height: 42px;
    margin-bottom: 16px;
`

export const StyledParagraph = styled.p`
    font-size: 20px;
    font-weight: 400;
    color: #555a74;
    line-height: 30px;
`

export const StyledShadowBg = styled.div`
    position: absolute;
    background: radial-gradient(
        50% 50% at 50% 50%,
        #1e6adc -60%,
        rgba(196, 196, 196, 0) 100%
    );
    height: 846px;
    width: 846px;
    left: 230px;
    top: 0px;
    z-index: -1;
`
