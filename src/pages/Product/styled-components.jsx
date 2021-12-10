import styled, { css } from 'styled-components'
import Container from '../../components/Container'

export const Wrapper = styled(Container)`
    padding-top: 24px;
    padding-bottom: 120px;
    display: flex;
    column-gap: 20px;

    @media only screen and (max-width: 576px) {
        padding-bottom: 56px;
        flex-wrap: wrap;
        column-gap: 0;
    }
`

const Media = css`
    @media only screen and (max-width: 576px) {
        width: 100%;
    }
`

export const Navbar = styled.nav`
    width: calc((100% - 20px) / 3 * 1);

    ${Media}
`

export const Main = styled.main`
    width: calc((100% - 20px) / 3 * 2);

    ${Media}
`

export const List = styled.ul`
    list-style-type: none;
    padding-left: 0;
`

export const ListItem = styled.li`
    &:not(:last-child) {
        margin-bottom: ${ props => props.paddingBottom + 'px' || '8px' };
    }
`

export const HeadingOne = styled.h1`
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    color: #1f273e;
    margin-bottom: 24px;

    @media only screen and (max-width: 576px) {
        margin-top: 32px;
        font-size: 20px;
        line-height: 26px;
    }
`

export const Paragraph = styled.div`
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: #555A74;
    margin-bottom: 40px;

    strong {
        font-weight: 700;
    }

    a {
        text-decoration: underline;
        color: #555A74;

        &:hover {
            color: #DC1E33;
        }
    }
`

export const ImageList = styled(List)`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 16px 20px;

    @media only screen and (max-width: 816px) {
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 16px;
    }
`;

export const Shadow = styled.div`
    position: absolute;
    width: 1570px;
    height: 846px;
    right: 50%;
    top: 100%;
    transform: translate(50%, -17%);
    background: radial-gradient(
        50% 50% at 50% 50%,
        #1e6adc 0%,
        rgba(196, 196, 196, 0) 100%
    );
`
