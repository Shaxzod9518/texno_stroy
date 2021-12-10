import { StyledLink } from './style'

const LinkCard = ({ children, to }) => (
    <StyledLink activeClassName="is-active" to={to}>
        {children}
    </StyledLink>
)

export default LinkCard
