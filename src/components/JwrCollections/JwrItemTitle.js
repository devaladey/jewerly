import './JwrItemTitle.css';
function JwrItemTitle({children, className}) {
    return ( 
        <h2 className={`jwr-item-title ${className}`}>{children}</h2>
     );
}

export default JwrItemTitle;