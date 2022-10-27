
import CatalogueHeader from '../../components/Catalogue/CatalogueHeader';
import CatalogueItems from '../../components/Catalogue/CatalogueItems';
import CatalogueSidebar from '../../components/Catalogue/CatalogueSidebar';
import Container from '../../components/UI/Container';
import Pagination from '../../components/UI/Pagination';
import './CatalogueScreen.css';


//https://www.behance.net/gallery/154199527/Website-Online-store?tracking_source=search_projects%7Cweb+ui+ecommerce

function CatalogueScreen() {
    return (
        <main className='catalogue'>
            <Container>
                <CatalogueHeader />
                <div className='catalogue__row'>
                    <div className='catalogue__col'>
                        <CatalogueSidebar />
                    </div>
                    <div className='catalogue__col'>
                        {/* <CatalogueItems /> */}
                        <CatalogueItems />
                        <Pagination className='catalogue__pagination' />
                    </div>
                </div>
            </Container>
        </main>
    );
}

export default CatalogueScreen;