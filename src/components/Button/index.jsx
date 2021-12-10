import cn from 'classnames'
import './Button.css'

import { Link } from 'react-router-dom'

const Button = ({
    variant,
    url = '',
    block = false,
    children,
    handleOnClick,
    ...props
}) => {
    const Tag = url ? Link : 'button'
    return (
        <Tag
            {...(url ? { to: url } : {})}
            onClick={handleOnClick}
            className={
                'btn ' +
                cn({
                    [`btn-variant-${variant}`]: variant,
                    ['btn-block']: block,
                })
            }
            {...props}
        >
            {children}
        </Tag>
    )
}

export default Button
