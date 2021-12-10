import { StyledContainer, StyledIcon, StyledImage, StyledShadow } from './style'

const ImageCard = ({ image, padding }) => {
    return (
        <StyledContainer padding={padding}>
            <StyledImage src={image} alt="" />
            <StyledIcon>
                <img src="/images/focus.svg" alt="Focus icon" />
            </StyledIcon>
            <StyledShadow padding={padding} />
        </StyledContainer>
    )
}

export default ImageCard
