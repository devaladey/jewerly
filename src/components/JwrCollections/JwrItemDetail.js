import {FaHeart, FaShoppingBag} from 'react-icons/fa'
import './JwrItemDetail.css';

function JwrItemDetail({className}) {
    return (
        <div className={`jwr-item-detail ${className}`}>
            <p className='jwr-item-detail__title'>Half an apple flip gold-plated</p>
            <div className='jwr-item-detail__bottom'>
                <p className='jwr-item-detail__price'>$ 195.00</p>
                <span className='jwr-item-detail__icon'><FaHeart /></span>
                <span className='jwr-item-detail__icon'><FaShoppingBag /></span>
            </div>
        </div>
    );
}

export default JwrItemDetail;