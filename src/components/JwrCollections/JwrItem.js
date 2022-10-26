import { CircularCardBottomLeft, CircularCardBottomRight, CircularCardPerfect, CircularCardTopLeft, CircularCardTopRight } from '../UI/CircularCard';
import './JwrItem.css';
import JwrItemDetail from './JwrItemDetail';

function JwrItem({ position, className }) {
    
    const circles = [
        <CircularCardBottomLeft className='jwr-item__img-box' />,
        <CircularCardBottomRight className='jwr-item__img-box' />,
        <CircularCardTopLeft className='jwr-item__img-box' />,
        <CircularCardTopRight className='jwr-item__img-box' />,
        <CircularCardPerfect className='jwr-item__img-box' />
    ];

    return (
        <div className={`jwr-item ${className}`}>
            {circles[position]}
            <JwrItemDetail />
        </div>
    );
}

export default JwrItem;