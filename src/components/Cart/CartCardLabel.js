import './CartCardLabel.css';

function CartCardLabel({ isFooter, title, value, className }) {
    return (
        <div className={`cart-card-label ${className} ${isFooter && 'cart-card-label--footer'}`}>
            <div className='cart-card-label cart-card-label__title'>{title}:</div>
            <div className='cart-card-label cart-card-label__value'>{value}$</div>
        </div>
    );
}

export default CartCardLabel;