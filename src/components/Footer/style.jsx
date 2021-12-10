import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const FooterBackground = styled.div`
    background-color: #ffffff;
    @media (max-width: 816px) {
        padding-bottom: 32px;
    }
`

export const FooterWrapper = styled.div`
    padding: 42px 0;
    @media (max-width: 816px) {
        padding: 0;
    }
`

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 47px;
    @media (max-width: 816px) {
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
`
export const Img = styled.img`
    @media (max-width: 816px) {
        padding: 24px 0 32px 0;
    }
`
export const FooterInfo = styled.div`
    display: flex;
    @media (max-width: 1302px) {
        display: flex;
        flex-wrap: wrap;
    }
`

export const Info = styled.ul`
    list-style-type: none;
    padding-left: 0;
    width: 33%;
    @media (max-width: 1302px) {
        width: 50%;
    }
    @media (max-width: 816px) {
        width: 100%;
        border-bottom: 1px solid #eaecef;
        &:nth-child(2) {
            padding-top: 15px;
        }
    }
`

export const HeadingTwo = styled.h2`
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 16px;
    line-height: 19.36px;
    @media (max-width: 816px) {
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`
export const Images = styled.img`
    display: none;
    @media (max-width: 816px) {
        display: flex;
        align-items: center;
    }
`

export const ListItem = styled.li`
    display: block;
    margin-bottom: 12px;
    @media (max-width: 816px) {
        &:last-child {
            padding-bottom: 26px;
        }
    }
    &:not(:last-child) {
        margin-bottom: 12px;
    }
`

export const AnchorLink = styled(Link)`
    text-decoration: none;
    color: #464f6a;
    @media (max-width: 816px) {
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
    }
`

export const Contact = styled.div`
    @media (max-width: 1302px) {
        width: 50%;
        padding-top: 40px;
    }
    @media (max-width: 816px) {
        width: 100%;
        border-bottom: 1px solid #eaecef;
        padding-top: 15px;
    }
`

export const ContactNumber = styled.div`
    display: flex;
    margin-bottom: 22px;
`

export const ContactImage = styled.img`
    margin-right: 10px;
`

export const Numbers = styled.div``

export const Call = styled.a`
    display: block;
    text-decoration: none;
    color: #464f6a;
    line-height: 18.94px;
    font-size: 14px;
    font-weight: 400;
`

export const ContactLocation = styled.a`
    display: flex;
    text-decoration: none;
    margin-bottom: 32px;
`

export const LocationName = styled.p`
    width: 183px;
    color: #464f6a;
    line-height: 16.94px;
    font-size: 14px;
    font-weight: 400;
`

export const ContactEmail = styled.a`
    display: flex;
    text-decoration: none;
    @media (max-width: 816px) {
        &:last-child {
            padding-bottom: 26px;
        }
    }
`

export const MailName = styled.p`
    color: #464f6a;
    line-height: 16.94px;
    font-size: 14px;
    font-weight: 400;
`
