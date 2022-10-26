import PrimaryHeading from '../Typography/PrimaryHeading';
import Input from '../UI/Input';
import './ProductsCTA.css';
function ProductsCTA() {
    return ( 
        <div className='products-cta'>
            <PrimaryHeading className='products-cta__text'>Get access to exclusive events, <br /> collections and news</PrimaryHeading> 
            <Input type='email' placeholder='Enter your email' />   
        </div>
     );
}

export default ProductsCTA;