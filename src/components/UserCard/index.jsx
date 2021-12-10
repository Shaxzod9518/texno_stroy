import * as Styled from './styled-components'
import { useTranslation } from 'react-i18next'

const UserCard = ({ employee }) => {
    const { t, i18n } = useTranslation()

    return (
        <Styled.Container>
            <Styled.Image src={employee.avatar} alt={employee.name} />
            <Styled.Heading>{employee.name}</Styled.Heading>
            <Styled.Span>{employee[`position_${i18n.language}`]}</Styled.Span>
            <Styled.Paragraph>{employee.email}</Styled.Paragraph>
        </Styled.Container>
    )
}

export default UserCard
