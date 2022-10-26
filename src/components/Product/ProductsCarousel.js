import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { CircularCardBottomLeft, CircularCardBottomRight, CircularCardPerfect } from '../UI/CircularCard';
import './ProductsCarousel.css';

function ProductCarousel() {
    return (
        <div className='products-carousel'>
            <div className='products-carousel__row'>
                <CircularCardBottomRight className='products-carousel__img-box' />
                <CircularCardPerfect className='products-carousel__img-box' />
                <CircularCardBottomLeft className='products-carousel__img-box' />
                <button className='products-carousel__btn'><FaArrowLeft /></button>
                <button className='products-carousel__btn'><FaArrowRight /></button>
            </div>
            <div className='products-carousel__indicators'>
                <div className='products-carousel__indicator' />
                <div className='products-carousel__indicator' />
                <div className='products-carousel__indicator' />
            </div>
        </div>
    );
}

export default ProductCarousel;