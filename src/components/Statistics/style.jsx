import styled from 'styled-components'

export const StyledStatisticsBackground = styled.div`
    background-color: #fff;
`

export const StyledStatisticsData = styled.div`
    padding: 40px 0 120px 0;
`

export const StyledStatisticsInfos = styled.div`
    display: flex;
    justify-content: space-between;

    @media only screen and (max-width: 1302px) {
        flex-wrap: wrap;
        row-gap: 32px;
    }

    @media only screen and (max-width: 816px) {
        row-gap: 0;
    }
`

export const StyledStatisticsInfo = styled.div`
    @media only screen and (max-width: 1302px) {
        width: 50%;
    }

    @media only screen and (max-width: 816px) {
        width: 100%;

        &:not(:last-child) {
            padding-bottom: 16px;
            border-bottom: 1px solid #eaecef;
        }

        &:not(:first-child) {
            padding-top: 8px;
        }
    }
`

export const StyledHeading = styled.h1`
    font-size: 80px;
    font-weight: 700;
    color: #dc1e33;
`

export const StyledParagraph = styled.p`
    color: #1f273e;
    font-size: 32px;
    font-weight: 400;
`
