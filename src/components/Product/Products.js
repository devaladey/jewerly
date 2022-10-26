import PrimaryHeading from '../Typography/PrimaryHeading';
import Container from '../UI/Container';
import ProductCarousel from './ProductsCarousel';
import ProductsCTA from './ProductsCTA';
import './Products.css';

function Products() {
    return ( 
        <section className='products'>
            <Container>
                <PrimaryHeading className='products__heading'>FOLLOW PRODUCTS</PrimaryHeading>
                <ProductCarousel />
                <ProductsCTA />
            </Container>
        </section>
     );
}

export default Products;