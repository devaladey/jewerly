import { FaBars } from 'react-icons/fa';
import PrimaryHeading from '../Typography/PrimaryHeading';
import Container from '../UI/Container';
import NavbarActions from './NavbarActions';
import NavbarMenu from './NavbarMenu';
import './Navbar.css'

function Navbar() {
    return ( 
        <nav className='navbar'>
            <Container className='navbar__inner'>
                <button className='navbar__toggler'>
                    <FaBars />
                </button>
                <NavbarMenu />
                <PrimaryHeading className='navbar__logo'>JEWERLY</PrimaryHeading>
                <NavbarActions />
            </Container>
        </nav>
     );
}

export default Navbar;