import Container from '../../Container'
import styled from 'styled-components'

export const Contact = styled.div`
    background: #e5e5e5;
    padding-top: 64px;
    padding-bottom: 120px;
    position: relative;
    overflow: hidden;

    @media (max-width: 816px) {
        padding: 56px 0 96px;
    }
`

export const Wrapper = styled(Container)`
    @media (max-width: 816px) {
        width: 100%;
    }
`

export const ContactsItem = styled.div`
    display: grid;
    grid-row-gap: 16px;
    grid-column-gap: 20px;
    grid-template-columns: repeat(4, 1fr);

    @media (max-width: 816px) {
        grid-gap: 16px;
        grid-template-columns: repeat(2, 1fr);
    }
`

export const Shadow = styled.div`
    position: absolute;
    width: 1148px;
    height: 497px;
    right: 50%;
    top: 100%;
    transform: translate(23%, -15%);
    background: radial-gradient(
        50% 50% at 50% 50%,
        #1e6adc 0%,
        rgba(196, 196, 196, 0) 100%
    );
`
