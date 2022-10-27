import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { CircularCardBottomLeft, CircularCardBottomRight, CircularCardPerfect } from '../UI/CircularCard';
import './ProductsCarousel.css';

function ProductCarousel({circleClassName, indicatorClassName}) {
    return (
        <div className='products-carousel'>
            <div className='products-carousel__row'>
                <CircularCardBottomRight className={`products-carousel__img-box ${circleClassName}`} />
                <CircularCardPerfect className={`products-carousel__img-box ${circleClassName}`} />
                <CircularCardBottomLeft className={`products-carousel__img-box ${circleClassName}`} />
                <button className={`products-carousel__btn ${indicatorClassName}`}><FaArrowLeft /></button>
                <button className={`products-carousel__btn ${indicatorClassName}`}><FaArrowRight /></button>
            </div>
            <div className='products-carousel__indicators'>
                <div className={`products-carousel__indicator ${indicatorClassName}`} />
                <div className={`products-carousel__indicator ${indicatorClassName}`} />
                <div className={`products-carousel__indicator ${indicatorClassName}`} />
            </div>
        </div>
    );
}

export default ProductCarousel;