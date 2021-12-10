import {
    StyledCard,
    StyledCardImageContainer,
    StyledCardImage,
    StyledCardProduct,
    StyledCardInfo,
} from './style'

const ProductCard = ({ image, title, desc }) => {
    return (
        <StyledCard>
            <StyledCardImageContainer>
                <StyledCardImage src={image} />
            </StyledCardImageContainer>
            <div>
                <StyledCardProduct>{title}</StyledCardProduct>
                <StyledCardInfo>{desc}</StyledCardInfo>
            </div>
        </StyledCard>
    )
}

export default ProductCard
