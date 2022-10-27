import { FaCaretDown } from 'react-icons/fa';
import './CartInfoSubTitle.css';

function CartInfoSubTitle({text}) {
    return ( 
        <div className='card-info-sub-text'>
            <h3 className='card-info-sub-text__title'>{text}</h3>
            <button className='card-info-sub-text__btn'><FaCaretDown /></button>
        </div>
     );
}

export default CartInfoSubTitle;