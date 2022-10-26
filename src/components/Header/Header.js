import Container from '../UI/Container';
import './Header.css';
import HeaderImages from './HeaderImages';
import HeaderTexts from './HeaderTexts';

function Header() {
    return ( 
        <header className='header'>
            <Container className='header__inner'>
                <HeaderTexts />
                <HeaderImages />
            </Container>
        </header>
     );
}

export default Header;