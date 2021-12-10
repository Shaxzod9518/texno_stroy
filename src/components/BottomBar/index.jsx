import { useTranslation } from 'react-i18next'
import Container from '../Container'
import {
    StyledBottomBarBackground,
    StyledBottomBarWrapper,
    StyledLeftSide,
    StyledParagraph,
    // StyledRightSide,
    // StyledLink,
    // StyledImage
} from './style'

const BottomBar = () => {
    const { t } = useTranslation()

    return (
        <StyledBottomBarBackground>
            <Container>
                <StyledBottomBarWrapper>
                    <StyledLeftSide>
                        <StyledParagraph>
                            {t(
                                'Limited Liability Company, Scientific Production Enterprise. ©2021 Texnostroy LLC. All rights reserved.'
                            )}
                        </StyledParagraph>
                    </StyledLeftSide>
                    {/* <StyledRightSide>
                        <StyledLink to="/">
                            <StyledImage
                                src="../../images/facebook.svg"
                                alt="facebook-icon"
                            />
                        </StyledLink>
                        <StyledLink to="/">
                            <StyledImage
                                src="../../images/instagram.svg"
                                alt="instagram-icon"
                            />
                        </StyledLink>
                        <StyledLink to="/">
                            <StyledImage
                                src="../../images/twitter.svg"
                                alt="twitter-icon"
                            />
                        </StyledLink>
                        <StyledLink to="/">
                            <StyledImage
                                src="../../images/youtube.svg"
                                alt="youtube-icon"
                            />
                        </StyledLink>
                        <StyledLink to="/">
                            <StyledImage
                                src="../../images/telegram.svg"
                                alt="telegram-icon"
                            />
                        </StyledLink>
                        <StyledLink to="/">
                            <StyledImage
                                src="../../images/whatsapp.svg"
                                alt="whatsapp-icon"
                            />
                        </StyledLink>
                    </StyledRightSide> */}
                </StyledBottomBarWrapper>
            </Container>
        </StyledBottomBarBackground>
    )
}

export default BottomBar
