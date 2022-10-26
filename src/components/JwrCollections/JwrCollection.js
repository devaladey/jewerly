import PrimaryHeading from '../Typography/PrimaryHeading';
import Button from '../UI/Button';
import Container from '../UI/Container';
import JwrItem from './JwrItem';
import JwrPillItem from './JwrPillItem';
import './JwrCollection.css';

function JwrCollection() {
    return (
        <section className='jwr-collection'>
            <Container>
                <PrimaryHeading>NEW COLLECTION</PrimaryHeading>
                <div className='jwr-collection__inner'>
                    <div className='jwr-collection__row'>
                        <JwrItem position={1} className='jwr-collection__col' />
                        <JwrItem position={4} className='jwr-collection__col jwr-collection__col-m-lt' />
                        <JwrItem position={0} className='jwr-collection__col jwr-collection__col-m-auto' />
                    </div>
                    <div className='jwr-collection__row'>
                        <JwrItem position={0} className='jwr-collection__col' />
                        <JwrItem position={4} className='jwr-collection__col jwr-collection__col-m-auto' />
                        <JwrItem position={1} className='jwr-collection__col jwr-collection__col-m-lt' />
                    </div>
                    <div className='jwr-collection__row jwr-collection__row-pill'>
                        <JwrPillItem />
                        <JwrPillItem />
                    </div>
                    <div className='jwr-collection__row'>
                        <JwrItem position={1} className='jwr-collection__col jwr-collection__col-m-auto' />
                        <JwrItem position={4} className='jwr-collection__col jwr-collection__col-m-lt' />
                        <JwrItem position={1} className='jwr-collection__col jwr-collection__col-m-lt' />
                    </div>
                    <div className='jwr-collection__actions'>
                    <Button>SHOW MORE</Button>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default JwrCollection;