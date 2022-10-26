import PrimaryHeading from '../Typography/PrimaryHeading';
import Container from '../UI/Container';
import './Navbar.css'
import NavbarActions from './NavbarActions';
import NavbarMenu from './NavbarMenu';
function Navbar() {
    return ( 
        <nav className='navbar'>
            <Container className='navbar__inner'>
                <NavbarMenu />
                <PrimaryHeading className='navbar__logo'>JEWERLY</PrimaryHeading>
                <NavbarActions />
            </Container>
        </nav>
     );
}

export default Navbar;