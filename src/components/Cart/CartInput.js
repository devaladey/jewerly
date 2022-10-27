import './CartInput.css';

function CartInput({type, placeholder, className}) {
    return ( 
        <input type={type} placeholder={placeholder} className={`cart-input ${className}`} />
     );
}

export default CartInput;