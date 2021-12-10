import { StyledContainer, StyledDate, StyledParagraph } from './style'

const StageCard = ({ date, text }) => (
    <StyledContainer>
        <StyledDate>{date}</StyledDate>
        <StyledParagraph
            dangerouslySetInnerHTML={{
                __html: text,
            }}
        ></StyledParagraph>
    </StyledContainer>
)

export default StageCard
