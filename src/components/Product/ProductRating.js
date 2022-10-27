import { FaStar } from 'react-icons/fa';
import './ProductRating.css';

function ProductRating() {
    return (
        <div className='product-rating'>
            <div className='product-rating__star-box'>
                {Array.from(new Array(5)).map((star, i) => {
                    return (<span className='product-rating__star' key={i}><FaStar /></span>)
                })}
            </div>
            <div className='product-rating__text'>15 reviews</div>
        </div>
    );
}

export default ProductRating;