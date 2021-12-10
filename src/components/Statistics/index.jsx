import { useTranslation } from 'react-i18next'
import Container from '../Container'
import HeadingTwo from '../HeadingTwo'
import {
    StyledStatisticsBackground,
    StyledStatisticsData,
    StyledStatisticsInfos,
    StyledStatisticsInfo,
    StyledHeading,
    StyledParagraph,
} from './style'

const Statistics = (props) => {
    const { t } = useTranslation()

    return (
        <StyledStatisticsBackground>
            <Container>
                <StyledStatisticsData>
                    <HeadingTwo>{t('statistics')}</HeadingTwo>
                    <StyledStatisticsInfos>
                        <StyledStatisticsInfo>
                            <StyledHeading>{props.partners}+</StyledHeading>
                            <StyledParagraph>{t('Partners')}</StyledParagraph>
                        </StyledStatisticsInfo>
                        <StyledStatisticsInfo>
                            <StyledHeading>{props.products}+</StyledHeading>
                            <StyledParagraph>{t('Products')}</StyledParagraph>
                        </StyledStatisticsInfo>
                        <StyledStatisticsInfo>
                            <StyledHeading>{props.projects}+</StyledHeading>
                            <StyledParagraph>{t('Projects')}</StyledParagraph>
                        </StyledStatisticsInfo>
                        <StyledStatisticsInfo>
                            <StyledHeading>{props.specialists}+</StyledHeading>
                            <StyledParagraph>
                                {t('Specialists')}
                            </StyledParagraph>
                        </StyledStatisticsInfo>
                    </StyledStatisticsInfos>
                </StyledStatisticsData>
            </Container>
        </StyledStatisticsBackground>
    )
}

export default Statistics
