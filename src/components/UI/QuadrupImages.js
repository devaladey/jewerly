import { CircularCardPerfect, CircularCardBottomLeft, CircularCardBottomRight, CircularCardTopLeft } from './CircularCard';
import './QuadrupImages.css';

function QuadrupImages({boxClassName, itemClassName }) {
    return ( 
        <div className={`quadrup-image ${boxClassName}`}>
            <CircularCardBottomRight className={`quadrup-image__circle ${itemClassName}`} />
            <CircularCardBottomLeft className={`quadrup-image__circle ${itemClassName}`} />
            <CircularCardPerfect className={`quadrup-image__circle ${itemClassName}`}  />
            <CircularCardTopLeft className={`quadrup-image__circle ${itemClassName}`} />
        </div>
     );
}

export default QuadrupImages;