import * as Styled from './style'
import { useTranslation } from 'react-i18next'

const Support = () => {
    const { t } = useTranslation()

    return (
        <Styled.Background>
            <Styled.Wrapper small>
                <Styled.ImageContainer>
                    <Styled.Image src="images/agent.png" />
                </Styled.ImageContainer>
                <Styled.Content>
                    <Styled.Heading>{ t("24/7 SUPPORT SERVICE") }</Styled.Heading>
                    <Styled.List>
                        <Styled.ListItem>
                            <Styled.Icon src="images/call.svg" />
                            <div>
                                <Styled.Link href="tel:+998998585567">
                                    +998 99 858 55 67
                                </Styled.Link>
                                {/* <Styled.Link href="tel:380567703036" mobileOnly>
                                    380 56 770 30 36
                                </Styled.Link> */}
                            </div>
                        </Styled.ListItem>
                        <Styled.ListItem>
                            <Styled.Icon src="images/email.svg" />
                            <Styled.Link href="mail:info@texnostroy.org">
                                info@texnostroy.org
                            </Styled.Link>
                        </Styled.ListItem>
                        <Styled.ListItem>
                            <Styled.Icon src="images/location.svg" />
                            <Styled.Link href="javascript:;">
                                { t("Ukraine, 49038, Dnipro, st. Ak. Belelyubskogo, 5A") }
                            </Styled.Link>
                        </Styled.ListItem>
                    </Styled.List>
                </Styled.Content>
            </Styled.Wrapper>
        </Styled.Background>
    )
}
export default Support
