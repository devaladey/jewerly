
import ContactInfo from '../../components/Contact/ContactInfo';
import CatalogueHeader from '../../components/Catalogue/CatalogueHeader';
import { CircularCardPerfect } from '../../components/UI/CircularCard';
import Container from '../../components/UI/Container';
import './ContactScreen.css';

function ContactScreen() {
    return ( 
        <main className='contact'>
            <Container>
                <CatalogueHeader label='Contact' title='CONTACT' showIcons={false} />
                <div className='contact__row'>
                    <div className='contact__col'>
                        <ContactInfo title='Address' description='32 Addison St. Arkington, MA 02476, USA' />
                        <ContactInfo title='Phone' description='+1 347-517-8427' />
                        <ContactInfo title='Email' description='jewerly@gmail.com' />
                    </div>
                    <div className='contact__col'>
                        <CircularCardPerfect className='contact__img-box' />
                    </div>
                </div>
            </Container>
        </main>
     );
}

export default ContactScreen;