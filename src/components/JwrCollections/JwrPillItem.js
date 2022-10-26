import { CircularCardPerfect } from '../UI/CircularCard';
import JwrItemDetail from './JwrItemDetail';
import './JwrPillItem.css';

function JwrPillItem() {
    return ( 
        <div className='jwr-pill-item'>
            <CircularCardPerfect className='jwr-pill-item__img-box' />
            <JwrItemDetail className='jwr-pill-item__detail-box' />
        </div>
     );
}

export default JwrPillItem;