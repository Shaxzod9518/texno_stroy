import styled from 'styled-components'
import Container from '../../Container'

export const StyledContactsWrap = styled.div`
    background-color: #efefef;
`

export const StyledContainer = styled(Container)`
    padding-top: 120px;
    padding-bottom: 120px;

    @media only screen and (max-width: 816px) {
        padding: 40px 0 56px;
    }
`

export const StyledSupportBlock = styled.div`
    display: flex;
    column-gap: 20px;
    margin-bottom: 24px;

    @media only screen and (max-width: 816px) {
        display: block;
        column-gap: 0;
        margin-bottom: 0;
    }
`

export const StyledLabel = styled.label`
    display: block;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #1f273e;
    margin-bottom: 8px;
`

export const StyledInputGroup = styled.div`
    width: 100%;

    @media only screen and (max-width: 816px) {
        margin-bottom: 24px;
    }
`

export const StyledInput = styled.input`
    width: 100%;
    padding: 20px 16px;
    background-color: #fff;
    border-radius: 8px;
    border: none;
    border: 1px solid #fff;
    height: 64px;
    font-size: 20px;
    outline: none;

    &::placeholder {
        color: #eaecef;
    }
    &:focus {
        border-color: #0d69d7;
        color: #0d69d7;
    }
`

export const StyledTextarea = styled.textarea`
    width: 100%;
    outline: none;
    padding: 20px 16px;
    font-size: 20px;
    height: 120px;
    border-radius: 8px;
    border: none;
    border: 1px solid #fff;
    resize: vertical;

    &::placeholder {
        color: #eaecef;
    }
    &:focus {
        border-color: #0d69d7;
        color: #0d69d7;
    }
`

export const StyledFormButton = styled.button`
    margin: 32px 0 80px;
    width: 100%;
    height: 48px;
    color: #fff;
    font-size: 20px;
    padding-bottom: 20px;
    background: #0d69d7;
    border: none;
    padding-top: 12px;
    border-radius: 8px;

    @media only screen and (max-width: 816px) {
        margin: 24px 0 40px;
    }
`

export const StyledIframe = styled.iframe`
    width: 100%;
    height: 475px;
    border: 3px solid white;
    border-radius: 8px;

    @media only screen and (max-width: 816px) {
        height: 206px;
    }
`
