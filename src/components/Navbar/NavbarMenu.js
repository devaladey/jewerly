import Menu from '../UI/Menu';
import './NavbarMenu.css';

function NavbarMenu() {
    return ( 
        <Menu className='navbar-menu'>
            <li className='navbar-menu__item'>
                <a href='#about' className='navbar-menu__link'>
                    Rings
                </a>
            </li>
            <li className='navbar-menu__item'>
                <a href='#about' className='navbar-menu__link'>
                    Earrings
                </a>
            </li>
            <li className='navbar-menu__item'>
                <a href='#about' className='navbar-menu__link'>
                    Bracelets
                </a>
            </li>
            <li className='navbar-menu__item'>
                <a href='#about' className='navbar-menu__link'>
                    Neklace
                </a>
            </li>
        </Menu>
     );
}

export default NavbarMenu;