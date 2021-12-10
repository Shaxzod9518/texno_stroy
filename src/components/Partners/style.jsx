import styled from 'styled-components'
import HeadingTwo from '../HeadingTwo'

export const StyledContainer = styled.div`
    background-color: white;
    width: calc(1005 - 48px);
    margin: 0 auto;
    overflow: hidden;

    @media only screen and (max-width: 816px) {
        width: calc(100% - 32px);
    }
`

export const StyledHeadingTwo = styled(HeadingTwo)`
    margin-bottom: 40px;
`

export const StyledPartnersLogos = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 40px;
    column-gap: 24px;

    @media only screen and (max-width: 816px) {
        column-gap: 16px;
    }
`

export const StyledImage = styled.img`
    width: calc((100vw - 24px * 10) / 9);
    height: auto;

    @media only screen and (max-width: 1302px) {
        width: calc((100vw - 24px * 6) / 5);
    }

    @media only screen and (max-width: 816px) {
        width: calc((100vw - 16px * 2));
    }
`
