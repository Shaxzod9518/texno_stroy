import { useTranslation } from 'react-i18next'
import Container from '../Container'
import {
    StyledHeaderContainer,
    StyledItemFeatured,
    StyledShadow,
    StyledHeader,
    StyledTitle,
    StyledItem,
} from './style'

const Header = () => {
    const { t } = useTranslation()

    return (
        <StyledHeaderContainer>
            <Container>
                <StyledHeader>
                    <StyledItem src="images/header-image-1.png" alt="" />
                    <StyledItem src="images/header-image-2.png" alt="" />
                    <StyledItem src="images/header-image-3.png" alt="" />
                    <StyledItem src="images/header-image-4.png" alt="" />
                    <StyledItem src="images/header-image-5.png" alt="" />
                    <StyledItemFeatured>
                        <StyledTitle>
                            {t(
                                'Development, Production and Introduction funds automation for mining and mines from 1999'
                            )}
                        </StyledTitle>
                    </StyledItemFeatured>
                    <StyledItem src="images/header-image-6.png" alt="" />
                    <StyledItem src="images/header-image-7.png" alt="" />
                </StyledHeader>
            </Container>
            <StyledShadow />
        </StyledHeaderContainer>
    )
}

export default Header
