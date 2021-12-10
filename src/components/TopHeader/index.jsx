import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Container from '../Container'
import { useTranslation } from 'react-i18next'
import * as Styled from './style'
import api from '../../configs/api'

const TopHeader = () => {
    const [menuIsActive, setMenuIsActive] = useState(false)
    const [menuIcon, setMenuIcon] = useState('/images/bar.svg')
    const [firstProject, setFirstProject] = useState([])

    const { t, i18n } = useTranslation()

    const handleMenuToggle = () => {
        setMenuIsActive(!menuIsActive)
        setMenuIcon(menuIsActive ? '/images/bar.svg' : '/images/close.svg')
    }

    const handleChangeLanguage = (lng) => i18n.changeLanguage(lng)

    useEffect(() => {
        fetch(`${api.host}/get-first-project`)
            .then((res) => res.json())
            .then((data) => setFirstProject(data))
    }, [])

    return (
        <Styled.Overflow fixed={menuIsActive}>
            <Container>
                <Styled.Wrapper>
                    <Link to="/">
                        <Styled.Logo
                            src="/images/logo.svg"
                            alt="Texnostroy logo"
                        />
                    </Link>
                    <Styled.MenuIcon
                        onClick={handleMenuToggle}
                        src={menuIcon}
                        alt="Menu bar icon"
                    />
                    <Styled.Menus active={menuIsActive}>
                        <Styled.ListItem>
                            <Styled.Link
                                exact
                                activeClassName="is-active"
                                to="/"
                            >
                                {t('Home')}
                            </Styled.Link>
                        </Styled.ListItem>
                        <Styled.ListItem>
                            <Styled.Link
                                exact
                                activeClassName="is-active"
                                to="/products"
                            >
                                {t('Products')}
                            </Styled.Link>
                        </Styled.ListItem>
                        <Styled.ListItem>
                            <Styled.Link
                                activeClassName="is-active"
                                to={`/projects/${firstProject.slug}`}
                            >
                                {t('Projects')}
                            </Styled.Link>
                        </Styled.ListItem>
                        <Styled.ListItem>
                            <Styled.Link
                                activeClassName="is-active"
                                to="/copyright"
                            >
                                {t('Copyright')}
                            </Styled.Link>
                        </Styled.ListItem>
                        <Styled.ListItem>
                            <Styled.Link
                                activeClassName="is-active"
                                to="/contact"
                            >
                                {t('Contact')}
                            </Styled.Link>
                        </Styled.ListItem>
                        <Styled.ListItem>
                            <Styled.LangMenu>
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
                        </Styled.ListItem>
                    </Styled.Menus>
                </Styled.Wrapper>
            </Container>
        </Styled.Overflow>
    )
}

export default TopHeader
