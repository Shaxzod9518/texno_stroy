import { useState, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import useClickedOutside from '../../hooks/useClickedOutside'
import Container from '../Container'
import * as Styled from './styled-components'

const TopBar = () => {
    const langMenu = useRef(null)

    const [langIsActive, setLangIsActive] = useState(false)
    const { t, i18n } = useTranslation()
    const currentLang = i18n.language === 'en' ? 'Eng' : 'Rus'

    useClickedOutside(langMenu, (clickedOutside) => {
        if (clickedOutside) setLangIsActive(false)
    })


    const handleChangeLanguage = (lng) => i18n.changeLanguage(lng)

    const handleLangMenuToggle = () => setLangIsActive(!langIsActive)

    return (
        <Styled.Background>
            <Container>
                <Styled.Wrapper>
                    <div>
                        <Styled.ElementsWrapper>
                            <Styled.Image
                                src="/images/location.svg"
                                alt="location-icon"
                            />
                            <Styled.Toptext>
                                { t("Ukraine, 49038, Dnipro, st. Ak. Belelyubskogo, 5A") }
                            </Styled.Toptext>
                        </Styled.ElementsWrapper>
                    </div>
                    <Styled.RightSide>
                        <Styled.RightElementsWrapper>
                            <Styled.Image
                                src="/images/call.svg"
                                alt="call-icon"
                            />
                            <Styled.Link href="tel:+998998585567">
                                +998 99 858 55 67
                            </Styled.Link>
                        </Styled.RightElementsWrapper>
                        <Styled.RightElementsWrapper>
                            <Styled.Image
                                src="/images/email.svg"
                                alt="email-icon"
                            />
                            <Styled.Link href="mailto:info@texnostroy.org">
                                info@texnostroy.org
                            </Styled.Link>
                        </Styled.RightElementsWrapper>
                        <Styled.Lang ref={langMenu}>
                            <Styled.LangHeader onClick={handleLangMenuToggle}>
                                <Styled.Image
                                    src="/images/lang-en.svg"
                                    alt="English language switcher"
                                />
                                <Styled.ToptextLang>{ currentLang }</Styled.ToptextLang>
                                <Styled.Image
                                    src="/images/languages_pointer.svg"
                                    alt="languages_pointer-icon"
                                />
                            </Styled.LangHeader>
                            <Styled.LangMenu active={langIsActive}>
                                <Styled.LangMenuItem
                                    onClick={() => handleChangeLanguage('en')}
                                    active={i18n.language === 'en'}
                                >
                                    <Styled.Image
                                        src="/images/lang-en.svg"
                                        alt="lang-icon"
                                    />
                                    En
                                </Styled.LangMenuItem>
                                <Styled.LangMenuItem
                                    onClick={() => handleChangeLanguage('ru')}
                                    active={i18n.language === 'ru'}
                                >
                                    <Styled.Image
                                        src="/images/lang-ru.svg"
                                        alt="lang-icon"
                                    />
                                    Ru
                                </Styled.LangMenuItem>
                            </Styled.LangMenu>
                        </Styled.Lang>
                    </Styled.RightSide>
                </Styled.Wrapper>
            </Container>
        </Styled.Background>
    )
}

export default TopBar
