import { CircularCardBottomLeft, CircularCardBottomRight, CircularCardPerfect, CircularCardTopLeft, CircularCardTopRight } from '../UI/CircularCard';
import JwrItemDetail from './JwrItemDetail';
import JwrItemDetailHorizontal from './JwrItemDetailHorizontal';
import './JwrItem.css';

function JwrItem({ position, className, direction }) {

    const isHorizontal = direction === 'horizontal';
    
    const circles = [
        <CircularCardBottomLeft className='jwr-item__img-box' />,
        <CircularCardBottomRight className='jwr-item__img-box' />,
        <CircularCardTopLeft className='jwr-item__img-box' />,
        <CircularCardTopRight className='jwr-item__img-box' />,
        <CircularCardPerfect className='jwr-item__img-box' />
    ];

    return (
        <div className={`jwr-item ${className} ${isHorizontal ? 'jwr-item--horizontal' : '' }`}>
            {circles[position]}
            {isHorizontal ? <JwrItemDetailHorizontal /> : <JwrItemDetail />}
        </div>
    );
}

export default JwrItem;