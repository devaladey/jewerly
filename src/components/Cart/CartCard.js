import Button from '../UI/Button';
import Card from '../UI/Card';
import CartCardLabel from './CartCardLabel';
import './CartCard.css';

function CartCard() {
    return (
        <Card className='cart-card'>
            <div className='cart-card__header'>
                <h2 className='cart-card__title'>Order Summary</h2>
            </div>
            <div className='cart-card__body'>
                <CartCardLabel title='Subtotal' value='1345' />
                <CartCardLabel title='Shipping' value='FREE' />
                <CartCardLabel title='Promocode' value='0' />
            </div>
            <div className='cart-card__footer'>
                <div className='cart-card__row'>
                    <input type='text' placeholder='Enter code' className='cart-card__input' />
                    <Button className='cart-card__input-btn'>APPLY</Button>
                </div>
                <CartCardLabel isFooter={true} title='Total' value='1345' />
                <Button className='cart-card__btn'>PLACE YOUR ORDER</Button>
            </div>
        </Card>
    );
}

export default CartCard;