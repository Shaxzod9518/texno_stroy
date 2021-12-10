import styled, { css } from 'styled-components';
import Container from '../../components/Container';

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
`;

const Media = css`
    @media only screen and (max-width: 576px) {
        width: 100%;
    }
`;

export const Navbar = styled.nav`
    width: calc((100% - 20px) / 3 * 1);

    ${Media}
`;

export const Main = styled.main`
    width: calc((100% - 20px) / 3 * 2);

    ${Media}
`;

export const List = styled.ul`
    list-style-type: none;
    padding-left: 0%;
`;

export const ListItem = styled.li`
    &:not(:last-child) {
        margin-bottom: 8px;
    }
`;

export const HeadingOne = styled.h1`
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    color: #1F273E;
    margin-bottom: 24px;

    @media only screen and (max-width: 576px) {
        margin-top: 32px;
        font-size: 20px;
        line-height: 26px;
    }
`;

export const HeadingTwo = styled(HeadingOne)`
    margin-top: 32px;
    margin-bottom: 16px;
`;

export const Gallery = styled.ul`
    list-style-type: none;
    padding-left: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;

    @media only screen and (max-width: 576px) {
        gap: 16px;
    }
`;

export const GalleryItem = styled.li`
    width: calc((100% - 3 * 20px) / 4);

    @media only screen and (max-width: 576px) {
        width: calc((100% - 16px) / 2);
    }
`;