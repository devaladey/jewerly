import Button from '../UI/Button';
import HeaderTitle from './HeaderTitle';
import './HeaderTexts.css';

function HeaderTexts() {
    return (
        <div className='header-texts'>
            <HeaderTitle />
            <p className='header-texts__paragraph'>There is nothing more beautiful than your own <br className='header-texts__paragraph-break' /> individuality, underlined by the right details.</p>
            <Button className='header-texts__btn'>BUY JEWERLY</Button>
        </div>
    );
}

export default HeaderTexts;