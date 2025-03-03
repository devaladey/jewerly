import PrimaryHeading from '../Typography/PrimaryHeading';
import Container from '../UI/Container';
import FooterHeading from './FooterHeading';
import FooterMenu from './FooterMenu';
import FooterSocial from './FooterSocial';
import './Footer.css';
import FooterPara from './FooterPara';

function Footer() {
    return (
        <footer className='footer'>
            <Container>
                <div className='footer__row'>
                    <div className='footer__col'>
                        <PrimaryHeading>JEWERLY</PrimaryHeading>
                    </div>
                    <div className='footer__col'>
                        <FooterHeading>Collection</FooterHeading>
                        <FooterMenu menu={['Rings', 'Bracelets', 'Necklace', 'Earrings']} />
                    </div>
                    <div className='footer__col'>
                        <FooterHeading>About Us</FooterHeading>
                        <FooterMenu menu={['Our Producers', 'FAQ', 'Sitemap', 'About Us', 'Terms & Conditions']} />
                    </div>
                    <div className='footer__col'>
                        <FooterHeading>Customer Services</FooterHeading>
                        <FooterMenu menu={['Contact Us', 'Track Your Order', 'Product Care & Repair', 'Shipping and Returns']} />
                    </div>
                </div>
                <div className='footer__row'>
                    <FooterPara />
                    <FooterSocial />
                </div>
            </Container>
        </footer>
    );
}

export default Footer;