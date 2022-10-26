import './Menu.css';

function Menu({children, className}) {
    return ( 
        <ul className={`menu ${className}`}>
            {children}
        </ul>
     );
}

export default Menu;