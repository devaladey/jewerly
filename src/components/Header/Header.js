import Container from '../UI/Container';
import QuadrupImages from '../UI/QuadrupImages';
import HeaderTexts from './HeaderTexts';
import './Header.css';

function Header() {
    return ( 
        <header className='header'>
            <Container className='header__inner'>
                <HeaderTexts />
                <QuadrupImages boxClassName='header__img-box' itemClassName='header__image' />
            </Container>
        </header>
     );
}

export default Header;