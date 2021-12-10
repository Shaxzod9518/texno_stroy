import { useEffect, useState } from 'react'
import api from '../../configs/api'
import { useTranslation } from 'react-i18next'
import {
    StyledContainer,
    StyledHeadingTwo,
    StyledPartnersLogos,
    StyledImage,
} from './style'

const Partners = () => {
    const [partners, setPartners] = useState(null)

    const { t } = useTranslation()

    useEffect(() => {
        fetch(`${api.host}/partners/`)
            .then((res) => res.json())
            .then((data) => setPartners(data))
    }, [])

    return (
        <StyledContainer>
            <StyledHeadingTwo>{t('Partners')}</StyledHeadingTwo>
            {partners && (
                <StyledPartnersLogos>
                    {partners.map((partner, index) => (
                        <StyledImage
                            src={partner.logo}
                            alt={partner.name}
                            key={index.toString()}
                        />
                    ))}
                </StyledPartnersLogos>
            )}
        </StyledContainer>
    )
}

export default Partners
