import Container from '../Container'

import {
    StyledNavbar,
    StyledList,
    StyledListItem,
    StyledListLink,
    StyledListArrow,
} from './style'

export const Breadcrumb = ({ children, ...props }) => (
    <Container {...props}>
        <StyledNavbar>
            <StyledList>{children}</StyledList>
        </StyledNavbar>
    </Container>
)

export const BreadcrumbItem = ({ path, icon, children, ...props }) => (
    <StyledListItem {...props}>
        <StyledListLink to={path}>{children}</StyledListLink>
        {icon && <StyledListArrow>→</StyledListArrow>}
    </StyledListItem>
)
