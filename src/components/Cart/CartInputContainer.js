import './CartInputContainer.css';

function CartInputContainer({children}) {
    return ( 
        <div className='cart-input-container'>
            {children}
        </div>
     );
}

export default CartInputContainer;