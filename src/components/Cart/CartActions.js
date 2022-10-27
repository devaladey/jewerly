import { useState } from 'react';
import { CircularCardPerfect } from '../UI/CircularCard';
import './CartActions.css';

function CartActions({className}) {
    const [isBtnIncreaseActive, setIsBtnIncreaseActive] = useState(false)
    const [isBtnDecreaseActive, setIsBtnDecreaseActive] = useState(false)
    const [productQuantity, setProductQuantity] = useState(0)

    const changeActiveBtnHandler = (e)=> {
        if(e.target.value === '-') {
            setIsBtnDecreaseActive(true);
            setIsBtnIncreaseActive(false);
            setProductQuantity(prev=> prev - 1);
        } else {
            setIsBtnDecreaseActive(false);
            setIsBtnIncreaseActive(true);
            setProductQuantity(prev=> prev + 1);
        }
    };

    return (
        <div className={`cart-actions ${className}`}>
            <input type='button' className={`cart-actions__action ${isBtnDecreaseActive && 'cart-actions__action--active'}`} value='-' onClick={changeActiveBtnHandler} />
            <CircularCardPerfect className='cart-actions__quantity'>{productQuantity}</CircularCardPerfect>
            <input type='button' className={`cart-actions__action ${isBtnIncreaseActive && 'cart-item__action--active'}`} value='+' onClick={changeActiveBtnHandler} />
        </div>
    );
}

export default CartActions;