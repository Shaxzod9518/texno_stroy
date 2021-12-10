import Container from '../Container'
import { useTranslation } from 'react-i18next'
import {
    StyledAboutUsBackground,
    StyledAboutUsWrapper,
    Heading,
    StyledVideo,
    Iframe,
    StyledTexts,
    StyledHeading,
    StyledParagraph,
    StyledShadowBg,
} from './style'

const AboutUs = () => {
    const { t } = useTranslation()

    return (
        <StyledAboutUsBackground>
            <Container>
                <StyledAboutUsWrapper>
                    <Heading>{t('about us')}</Heading>
                    <StyledVideo>
                        {/* <Iframe
                            width="512"
                            height="279"
                            src="https://www.youtube.com/embed/zNw1jZNb0MY"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        ></Iframe> */}
                        <StyledTexts>
                            {/* <StyledHeading>
                                {t(
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
                                )}
                            </StyledHeading> */}
                            <StyledParagraph>
                                {t(
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                                )}
                            </StyledParagraph>
                        </StyledTexts>
                    </StyledVideo>
                </StyledAboutUsWrapper>
            </Container>
            {/* <StyledShadowBg /> */}
        </StyledAboutUsBackground>
    )
}

export default AboutUs
