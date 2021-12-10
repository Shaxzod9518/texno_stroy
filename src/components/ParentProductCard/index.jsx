import { Link } from 'react-router-dom'

import * as Styled from './styled-components'

const ParentProductCard = ({ image, title, url }) => {
    return (
        <Link to={url}>
            <Styled.Container>
                <Styled.Card>
                    <Styled.Header>
                        <Styled.Image src={image} alt={title} />
                    </Styled.Header>
                    <Styled.Body> 
                        <Styled.Text>{title}</Styled.Text>
                    </Styled.Body>
                </Styled.Card>
            </Styled.Container>
        </Link>
    )
}
export default ParentProductCard
