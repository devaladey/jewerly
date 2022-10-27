import FooterPara from '../../components/Footer/FooterPara';
import PrimaryHeading from '../../components/Typography/PrimaryHeading';
import Button from '../../components/UI/Button';
import Container from '../../components/UI/Container';
import './NotFoundScreen.css';

function NotFoundScreen() {
    return (
        <main className='not-found'>
            <Container>
                <div className='not-found__inner'>
                    <PrimaryHeading className='not-found__heading'>JEWERLY</PrimaryHeading>
                    <h3 className='not-found__text'>Page not found</h3>
                    <p className='not-found__para'>Sorry but we can't find that page on our website</p>
                    <Button className='not-found__btn'>BACK TO HOME</Button>
                    <div className='not-found__image'></div>
                </div>
                <FooterPara className='not-found__footer-para' />
            </Container>
        </main>
    );
}

export default NotFoundScreen;