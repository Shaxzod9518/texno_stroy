import styled from 'styled-components'
import Container from '../Container'
import HeadingTwo from '../HeadingTwo'

export const Wrapper = styled(Container)`
    position: relative;
    z-index: 99;
    padding-bottom: 120px;

    @media only screen and (max-width: 1302px) {
        padding-bottom: 64px;
    }

    @media only screen and (max-width: 816px) {
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 16px;
        padding-bottom: 56px;
    }
`

export const Heading = styled(HeadingTwo)`
    margin-bottom: 40px;

    @media only screen and (max-width: 816px) {
        margin-bottom: 32px;
    }
`

export const List = styled.ul`
    list-style-type: none;
    padding-left: 0;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(6, 1fr);
    margin-bottom: 40px;

    @media only screen and (max-width: 1302px) {
        grid-template-columns: repeat(4, 1fr);
    }

    @media only screen and (max-width: 816px) {
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 16px;
        margin-bottom: 32px;
    }
`
