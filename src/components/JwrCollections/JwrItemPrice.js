import './JwrItemPrice.css';

function JwrItemPrice({children, className}) {
    return ( 
        <p className={`jwr-item-price ${className}`}>{children}</p>
     );
}

export default JwrItemPrice;