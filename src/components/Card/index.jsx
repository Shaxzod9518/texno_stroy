import { useState } from 'react'

import * as Styled from './styled-components'

const Card = ({ image, title }) => {
    const [hover, setHover] = useState(false)

    const handleHover = () => {
        setHover(!hover)
    }

    return (
        <Styled.Container onMouseEnter={handleHover} onMouseLeave={handleHover}>
            {hover && <Styled.Hover src="/images/hover.svg" alt="Hover icon" />}
            <Styled.Content>
                <Styled.Image src={image} alt={title} />
                <Styled.Button>{title}</Styled.Button>
            </Styled.Content>
        </Styled.Container>
    )
}

export default Card
