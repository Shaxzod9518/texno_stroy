import {
    StyledContainer,
    StyledImageContainer,
    StyledImage,
    StyledProduct,
    StyledInfo,
} from './style'

const ProductCardExtended = ({ image, title, desc }) => {
    return (
        <StyledContainer>
            <StyledImageContainer>
                <StyledImage src={image} />
            </StyledImageContainer>
            <div>
                <StyledProduct>{title}</StyledProduct>
                <StyledInfo dangerouslySetInnerHTML={{ __html: desc }} />
            </div>
        </StyledContainer>
    )
}

export default ProductCardExtended
