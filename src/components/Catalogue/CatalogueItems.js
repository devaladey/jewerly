import JwrItem from '../JwrCollections/JwrItem';
import JwrPillItem from '../JwrCollections/JwrPillItem';
import './CatalogueItems.css';

function CatalogueItems() {
    return (
        <div className='catalogue-items__row'>
            <>
            <JwrItem direction='horizontal' className='catalogue-items__item' position={0} />
            <JwrItem direction='horizontal' className='catalogue-items__item' position={4} />
            <JwrItem direction='horizontal' className='catalogue-items__item' position={1} />
            <JwrItem direction='horizontal' className='catalogue-items__item' position={1} />
            </>
            {/* <>
            <JwrItem position={0} />
            <JwrItem position={4} />
            <JwrItem position={1} />
            <JwrPillItem />
            <JwrItem  position={1} />
            </> */}
        </div>
    );
}

export default CatalogueItems;