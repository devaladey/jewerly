import {FaSearch, FaShoppingBag, FaHeart, FaUserAlt} from 'react-icons/fa'
import Menu from '../UI/Menu';
import './NavbarActions.css';

function NavbarActions() {
    return (
        <Menu className='navbar-actions'>
            <li className='navbar-actions__item'>
                <a href='#about' className='navbar-actions__link'>
                    <FaSearch />
                </a>
            </li>
            <li className='navbar-actions__item'>
                <a href='#about' className='navbar-actions__link'>
                    <FaShoppingBag />
                    <span className='navbar-actions__badge'>3</span>
                </a>
            </li>
            <li className='navbar-actions__item'>
                <a href='#about' className='navbar-actions__link'>
                    <FaHeart />
                </a>
            </li>
            <li className='navbar-actions__item'>
                <a href='#about' className='navbar-actions__link'>
                    <FaUserAlt />
                </a>
            </li>
        </Menu>
    );
}

export default NavbarActions;