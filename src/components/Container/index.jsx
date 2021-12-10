import { StyledContainer } from './style'

const Container = ({ small, children, ...props }) => (
    <StyledContainer {...props} small={small}>
        {children}
    </StyledContainer>
)

export default Container
