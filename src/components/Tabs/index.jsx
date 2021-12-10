import './styles.css'
import { useState, useCallback } from 'react'
import { Link } from 'react-router-dom'

export const Tabs = ({ children, defaultTab, route }) => {
    const queryTabExist = children.find(
        (child) => child.props.label === defaultTab
    )
    const initialTab = queryTabExist
        ? queryTabExist.props.labels
        : children[0].props.label
    const [activeTab, setActiveTab] = useState(initialTab)
    const handleActiveTab = useCallback((label) => setActiveTab(label), [])

    const tabs = children.map((child) => (
        <Link
            to={`/${route}/${child.props.label}`}
            onClick={(_) => handleActiveTab(child.props.label)}
            className={
                child.props.label === activeTab
                    ? ['tabs__tab', 'tabs__tab-active'].join(' ')
                    : 'tabs__tab'
            }
            key={child.props.label}
        >
            {child.props.tabName}
        </Link>
    ))

    const tabContent = children.filter(
        (child) => child.props.label === activeTab
    )

    return (
        <div>
            <div className="tabs__box">{tabs}</div>
            <div>{tabContent}</div>
        </div>
    )
}

export const Tab = (props) => {
    return <>{props.children}</>
}
