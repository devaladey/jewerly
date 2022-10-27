import { FaArrowRight } from 'react-icons/fa';
import { CircularCardBottomRight } from './CircularCard';
import './Modal.css';

function Modal({closeModal}) {
    

    return (
        <div className='modal'>
            <CircularCardBottomRight className='modal__circle'>
                <button className='modal__dismiss-btn' onClick={closeModal}>X</button>
                <header>
                    <h2 className='modal__title'>Thank you for choosing</h2>
                    <p  className='modal__para'>To access all our amazing offers, subscribe to us. Here is a <span className='modal__para-colored'>25% coupon</span> for your first purchase.</p>
                    <input type='text' placeholder='Enter your email' className='modal__input' />
                    <button className='modal__send-btn'><FaArrowRight /></button>
                </header>
            </CircularCardBottomRight>
        </div>
    );
}

export default Modal;