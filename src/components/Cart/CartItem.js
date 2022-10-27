import JwrItemPrice from '../JwrCollections/JwrItemPrice';
import JwrItemTitle from '../JwrCollections/JwrItemTitle';
import { CircularCardPerfect } from '../UI/CircularCard';
import CartActions from './CartActions';
import './CartItem.css';

function CartItem() {
    

    return (
        <div className='cart-item'>
            <CircularCardPerfect className='cart-item__img-box' />
            <JwrItemTitle className='cart-item__title'>Bracelet {`<<anbarin>>`} in gilded silver and blue amber</JwrItemTitle>
            <CartActions />
            <JwrItemPrice className='cart-item__price'>$ 435.00</JwrItemPrice>
            <div className='cart-item__delete-btn'>
                <button>X</button>
            </div>
        </div>
    );
}

export default CartItem;