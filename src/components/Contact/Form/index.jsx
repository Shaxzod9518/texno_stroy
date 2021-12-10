import { useTranslation } from 'react-i18next'
import {
    StyledContactsWrap,
    StyledContainer,
    StyledSupportBlock,
    StyledInputGroup,
    StyledLabel,
    StyledInput,
    StyledTextarea,
    StyledFormButton,
    StyledIframe,
} from './style'

const Form = () => {
    const { t } = useTranslation()

    return (
        <StyledContactsWrap>
            <StyledContainer small>
                <StyledSupportBlock>
                    <StyledInputGroup>
                        <StyledLabel for="full-name">{t('Full name')}</StyledLabel>
                        <StyledInput
                            type="text"
                            placeholder={t('Michael Jackson')}
                            id="full-name"
                        />
                    </StyledInputGroup>
                    <StyledInputGroup>
                        <StyledLabel for="phone">{t('Telephone')}</StyledLabel>
                        <StyledInput
                            type="number"
                            placeholder="+998 99 011 08 95"
                            id="phone"
                        />
                    </StyledInputGroup>
                </StyledSupportBlock>

                <StyledLabel for="message">{t('Message')}</StyledLabel>
                <StyledTextarea
                    placeholder={t('Business project')}
                    id="message"
                />

                <StyledFormButton>{t('Send message')}</StyledFormButton>

                <StyledIframe
                    src="https://yandex.com/map-widget/v1/?um=constructor%3Affdd4f0385065e9c803bb766587a7fb8e406c58015b5679838c7ad6f60a0c390&amp;source=constructor"
                    width="830"
                    height="400"
                    frameborder="0"
                />
            </StyledContainer>
        </StyledContactsWrap>
    )
}

export default Form
