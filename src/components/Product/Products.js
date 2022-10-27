import PrimaryHeading from '../Typography/PrimaryHeading';
import Container from '../UI/Container';
import ProductsCTA from './ProductsCTA';
import ProductsCarousel from './ProductsCarousel';
import './Products.css';

function Products() {
    return ( 
        <section className='products'>
            <Container>
                <PrimaryHeading className='products__heading'>FOLLOW PRODUCTS</PrimaryHeading>
                <ProductsCarousel />
                <ProductsCTA />
            </Container>
        </section>
     );
}

export default Products;