import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import * as Styled from './style'
import Button from '../Button'
import Container from '../Container'

const Footer = () => {
    const isMobile = window.innerWidth < 816

    const { t } = useTranslation()  

    const [infoOneActive, setInfoOneActive] = useState(!isMobile)
    const [infoTwoActive, setInfoTwoActive] = useState(!isMobile)
    const [contactActive, setContactActive] = useState(!isMobile)

    const handleTabToggle = (setState) => {
        setState((prevState) => !prevState)
    }

    return (
        <Styled.FooterBackground>
            <Container>
                <Styled.FooterWrapper>
                    <Styled.Header>
                        <Styled.Img
                            src="/images/texnostroy.svg"
                            alt="texnostroy-logo"
                        />
                        {/* <Button variant="download" url="/">
                            <img
                                src="/images/download-icon.svg"
                                alt="download-icon"
                                className="download-icon"
                            />
                            { t("Download PDF") }
                        </Button> */}
                    </Styled.Header>
                    <Styled.FooterInfo>
                        <Styled.Info active={infoOneActive}>
                            <Styled.HeadingTwo
                                onClick={() =>
                                    handleTabToggle(setInfoOneActive)
                                }
                            >
                                { t("Products") }
                                <Styled.Images
                                    src={
                                        infoOneActive
                                            ? '/images/angle-top.svg'
                                            : '/images/angle-bottom.svg'
                                    }
                                    alt="angle-bottom"
                                />
                            </Styled.HeadingTwo>
                            {infoOneActive && (
                                <>
                                    <Styled.ListItem>
                                        <Styled.AnchorLink to="/">
                                            Lorem ipsum dolor sit amet
                                        </Styled.AnchorLink>
                                    </Styled.ListItem>
                                    <Styled.ListItem>
                                        <Styled.AnchorLink to="/">
                                            Lorem ipsum
                                        </Styled.AnchorLink>
                                    </Styled.ListItem>
                                    <Styled.ListItem>
                                        <Styled.AnchorLink to="/">
                                            Lorem ipsum dolor sit
                                        </Styled.AnchorLink>
                                    </Styled.ListItem>
                                    <Styled.ListItem>
                                        <Styled.AnchorLink to="/">
                                            Lorem ipsum dolor sit amet
                                        </Styled.AnchorLink>
                                    </Styled.ListItem>
                                    <Styled.ListItem>
                                        <Styled.AnchorLink to="/">
                                            Lorem ipsum
                                        </Styled.AnchorLink>
                                    </Styled.ListItem>
                                </>
                            )}
                        </Styled.Info>
                        <Styled.Info active={infoTwoActive}>
                            <Styled.HeadingTwo
                                onClick={() =>
                                    handleTabToggle(setInfoTwoActive)
                                }
                            >
                                { t("Products") }
                                <Styled.Images
                                    src={
                                        infoTwoActive
                                            ? '/images/angle-top.svg'
                                            : '/images/angle-bottom.svg'
                                    }
                                    alt="angle-bottom"
                                />
                            </Styled.HeadingTwo>
                            {infoTwoActive && (
                                <>
                                    <Styled.ListItem>
                                        <Styled.AnchorLink to="/">
                                            Lorem ipsum dolor sit amet
                                        </Styled.AnchorLink>
                                    </Styled.ListItem>
                                    <Styled.ListItem>
                                        <Styled.AnchorLink to="/">
                                            Lorem ipsum
                                        </Styled.AnchorLink>
                                    </Styled.ListItem>
                                    <Styled.ListItem>
                                        <Styled.AnchorLink to="/">
                                            Lorem ipsum dolor sit
                                        </Styled.AnchorLink>
                                    </Styled.ListItem>
                                    <Styled.ListItem>
                                        <Styled.AnchorLink to="/">
                                            Lorem ipsum dolor sit amet
                                        </Styled.AnchorLink>
                                    </Styled.ListItem>
                                    <Styled.ListItem>
                                        <Styled.AnchorLink to="/">
                                            Lorem ipsum
                                        </Styled.AnchorLink>
                                    </Styled.ListItem>
                                </>
                            )}
                        </Styled.Info>
                        <Styled.Contact active={contactActive}>
                            <Styled.HeadingTwo
                                onClick={() =>
                                    handleTabToggle(setContactActive)
                                }
                            >
                                { t("Contacts") }
                                <Styled.Images
                                    src={
                                        contactActive
                                            ? '/images/angle-top.svg'
                                            : '/images/angle-bottom.svg'
                                    }
                                    alt="angle-bottom"
                                />
                            </Styled.HeadingTwo>
                            {contactActive && (
                                <>
                                    <Styled.ContactNumber>
                                        <Styled.ContactImage
                                            src="/images/call.svg"
                                            alt="call-icon"
                                        />
                                        <Styled.Numbers>
                                            <Styled.Call href="tel:+998998585567">
                                                +998 99 858 55 67
                                            </Styled.Call>
                                            {/* <Styled.Call href="tel:+380567703036">
                                                380 56 770 30 36
                                            </Styled.Call> */}
                                        </Styled.Numbers>
                                    </Styled.ContactNumber>
                                    <Styled.ContactLocation href="/">
                                        <Styled.ContactImage
                                            src="/images/location_on.svg"
                                            alt="location-icon"
                                        />
                                        <Styled.LocationName>
                                            { t("Ukraine, 49038, Dnipro, st. Ak. Belelyubskogo, 5A") } 
                                        </Styled.LocationName>
                                    </Styled.ContactLocation>
                                    <Styled.ContactEmail href="mailto:info@texnostroy.org">
                                        <Styled.ContactImage
                                            src="/images/email.svg"
                                            alt="email-icon"
                                        />
                                        <Styled.MailName>
                                            info@texnostroy.org
                                        </Styled.MailName>
                                    </Styled.ContactEmail>
                                </>
                            )}
                        </Styled.Contact>
                    </Styled.FooterInfo>
                </Styled.FooterWrapper>
            </Container>
        </Styled.FooterBackground>
    )
}

export default Footer
