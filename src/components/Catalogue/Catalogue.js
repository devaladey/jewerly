import PrimaryHeading from '../Typography/PrimaryHeading';
import Container from '../UI/Container';
import './Catalogue.css';
import CatalogueItems from './CatalogueItems';
import CatalogueSidebar from './CatalogueSidebar';

//https://www.behance.net/gallery/154199527/Website-Online-store?tracking_source=search_projects%7Cweb+ui+ecommerce

function Catalogue() {
    return (
        <main className='catalogue'>
            <Container>
                <PrimaryHeading>BRACELETS</PrimaryHeading>
                <div className='catalogue__row'>
                    <CatalogueSidebar />
                    <CatalogueItems />
                </div>
            </Container>
        </main>
    );
}

export default Catalogue;