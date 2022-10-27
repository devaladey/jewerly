
import CartActions from '../../components/Cart/CartActions';
import CatalogueHeader from '../../components/Catalogue/CatalogueHeader';
import JwrItemLabel from '../../components/JwrCollections/JwrItemLabel';
import JwrItemPrice from '../../components/JwrCollections/JwrItemPrice';
import ProductDetailDescription from '../../components/Product/ProductDetailDescription';
import ProductRating from '../../components/Product/ProductRating';
import ProductCarousel from '../../components/Product/ProductsCarousel';
import PrimaryHeading from '../../components/Typography/PrimaryHeading';
import Button from '../../components/UI/Button';
import Container from '../../components/UI/Container';
import QuadrupImages from '../../components/UI/QuadrupImages';
import './ProductDetailScreen.css';

function ProductDetailScreen() {
    return ( 
        <main className='product-detail'>
            <Container>
                <CatalogueHeader label='Stylish palazo bracelet hoop' title='STYLISH PALAZO BRACELET HOOP' extramain='Bracelets.' showIcons={false} />
                <div className='product-detail__row'>
                    <div className='product-detail__col'>
                        <QuadrupImages />
                    </div>
                    <div className='product-detail__col'>
                        <ProductRating />
                        <JwrItemLabel className='product-detail__label' label='Article' value='27337039' />
                        <JwrItemLabel className='product-detail__label' label='Collection' value='Palazzo' />
                        <JwrItemLabel className='product-detail__label' label='Size of the stone' value='6' />
                        <JwrItemLabel className='product-detail__label' label='Collection' value='Palazzo' />
                        <JwrItemLabel className='product-detail__label' label='Materials' value='Natural amber/silver/925&deg;/Gilt' />
                        <ProductDetailDescription>Dark Cherry Pallazzo bracelet from ifamore: 27337039</ProductDetailDescription>
                        <ProductDetailDescription>People came up with a panic button to feel safe. We invented a lucky button to feel happy and beautiful.</ProductDetailDescription>
                        <ProductDetailDescription>Stylish slim bracelet with bright amber  button is a source of great mood for the whole day.</ProductDetailDescription>
                        <CartActions className='product-detail__actions' />
                        <JwrItemPrice className='product-detail__price'>$ 485.00</JwrItemPrice>
                        <Button className='product-detail__buy-btn'>BUY BRACELET</Button>
                    </div>
                </div>
                <PrimaryHeading>VIEWED PREVIOUSLY</PrimaryHeading>
                <ProductCarousel indicatorClassName='product-detail__indicator' circleClassName='product-detail__img-box' />
            </Container>
        </main>
     );
}

export default ProductDetailScreen;