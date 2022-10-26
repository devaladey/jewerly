import { CircularCardPerfect, CircularCardBottomLeft, CircularCardBottomRight, CircularCardTopLeft } from '../UI/CircularCard';
import './HeaderImages.css';

function HeaderImages() {
    return ( 
        <div className='header-image'>
            <CircularCardBottomRight className='header-image__circle' />
            <CircularCardBottomLeft className='header-image__circle' />
            <CircularCardPerfect className='header-image__circle'  />
            <CircularCardTopLeft className='header-image__circle' />
        </div>
     );
}

export default HeaderImages;