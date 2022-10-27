import CartInfoTitle from './CartInfoTitle';
import CartInput from './CartInput';
import CartInputContainer from './CartInputContainer';
import CartInfoSubTitle from './CartInfoSubTitle';
import './CartInfo.css';

function CartInfo() {
    return (
        <section className='cart-info'>
            <CartInfoTitle>Information</CartInfoTitle>
            <CartInputContainer>
                <CartInput type='text' placeholder='First name' />
                <CartInput type='tel' placeholder='Phone' />
                <CartInput type='email' placeholder='Enter your email' />
            </CartInputContainer>
            <CartInfoTitle>Shipping</CartInfoTitle>
            <CartInfoSubTitle text='Postal Delivery' />
            <CartInputContainer>
                <CartInput type='text' placeholder='First name' />
                <CartInput type='text' placeholder='Last name' />
                <CartInput type='text' placeholder='Address delivery' />
                <div className='cart-info__row'>
                    <CartInput type='text' placeholder='Post code' className='cart-info__input' />
                    <CartInput type='text' placeholder='Country' className='cart-info__input' />
                    <CartInput type='text' placeholder='City' className='cart-info__input' />
                </div>
            </CartInputContainer>
            <CartInfoTitle>Payment</CartInfoTitle>
            <CartInfoSubTitle text='Credit Card' />
            <CartInputContainer>
                <CartInput type='text' placeholder='Card number' />
                <div className='cart-info__row'>
                    <CartInput type='text' placeholder='MM/YY' className='cart-info__input' />
                    <CartInput type='text' placeholder='CVS/CVV' className='cart-info__input' />
                </div>
                <br />
                <CartInput type='text' placeholder='Name on card' />
            </CartInputContainer>
        </section>
    );
}

export default CartInfo;