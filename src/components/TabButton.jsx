const TabButton = ({onClick, isActive, children }) => {
    return <li><button className={isActive ? 'active' : undefined} onClick={onClick}>{children}</button></li>;
};

export default TabButton;