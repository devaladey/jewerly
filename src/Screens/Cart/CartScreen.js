import { useEffect } from 'react';
import ReactDom from 'react-dom';
import CartItem from '../../components/Cart/CartItem';
import CartCard from '../../components/Cart/CartCard';
import CartInfo from '../../components/Cart/CartInfo';
import CatalogueHeader from '../../components/Catalogue/CatalogueHeader';
import Container from '../../components/UI/Container';
import Modal from '../../components/UI/Modal';

import './CartScreen.css';

function Cart() {

    const backkdropRoot = document.getElementById('backdrop-root');
    const htmlRoot = document.querySelector('html');

    // useEffect(()=> {
    //     backkdropRoot.classList.add('open');
    //     htmlRoot.style.overflow = 'hidden';
    // }, [])

    const closeModalHandler = ()=> {
        backkdropRoot.classList.remove('open');
        htmlRoot.style.overflow = 'initial';
    };

    return (
        <main className='cart'>
            <Container>
                <CatalogueHeader label='Cart' title='YOUR ORDER' showIcons={false} />
                <div className='cart__row'>
                    <div className='cart__col'>
                        <CartItem />
                        <CartItem />
                        <CartItem />
                    </div>
                    <div className='cart__col'>
                        <CartCard />
                    </div>
                </div>
                <CartInfo />
            </Container>
            {
                ReactDom.createPortal(<Modal closeModal={closeModalHandler} />, backkdropRoot)
            }
            
        </main>
    );
}

export default Cart;