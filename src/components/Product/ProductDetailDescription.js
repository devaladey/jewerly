import './ProductDetailDescription.css';

function ProductDetailDescription({children}) {
    return ( 
        <p className='product-detail-description'>{children}</p>
     );
}

export default ProductDetailDescription;