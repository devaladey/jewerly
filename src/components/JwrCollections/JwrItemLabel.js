import './JwrItemLabel.css';

function JwrItemLabel({label, value, className}) {
    return (
        <div className={`jwr-item-label ${className}`}>
            <div className='jwr-item-label__name'>{label}</div>
            <div className='jwr-item-label__value'>{value}</div>
        </div>
    );
}

export default JwrItemLabel;