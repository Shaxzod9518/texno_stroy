import { useState } from 'react'
import * as Styled from './styled-components'

export const Dropdown = ({ children, title, desc, path, ...props }) => {
    const [isExpanded, setIsExpanded] = useState(false)
    const handleToggle = () => setIsExpanded(!isExpanded)

    return (
        <Styled.Navbar {...props}>
            <Styled.Header onClick={handleToggle}>
                <Styled.Link exact activeClassName="is-active" to={path}>
                    <Styled.Heading>{title} </Styled.Heading>
                    <Styled.Paragraph>{desc}</Styled.Paragraph>
                </Styled.Link>
                <Styled.Button>
                    <img
                        src={`/images/caret-${isExpanded ? 'up' : 'down'}.svg`}
                        alt="Caret up"
                    />
                </Styled.Button>
            </Styled.Header>
            {isExpanded && <Styled.List>{children}</Styled.List>}
        </Styled.Navbar>
    )
}

export const DropdownItem = ({ children, path, ...props }) => (
    <Styled.ListItem {...props}>
        <Styled.ItemLink activeClassName="is-active" to={path}>
            {children}
        </Styled.ItemLink>
    </Styled.ListItem>
)
