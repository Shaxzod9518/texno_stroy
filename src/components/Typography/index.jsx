import cn from 'classnames';

import './styles.css';

const variants = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    subheadingOne: "h6",
    subheadingTwo: "h6",
    bodyOne: "p",
    bodyTwo: "p"
};

const Typography = ({ variant, color, children, ...props }) => {

    const Tag = variant ? variants[variant] : "p";

    return (
        <Tag
            className={cn({
                [`typography--variant-${variant}`]: variant,
                [`typography--color-${color}`]: color
            })}
            {...props}
        >
            { children }
        </Tag>
    );
}; 

export default Typography;