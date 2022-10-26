import { FaInstagram, FaFacebookF, FaTelegramPlane, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import Menu from '../UI/Menu';
import './FooterSocial.css';

function FooterSocial() {
    return (
        <Menu>
            <li className='footer-social__item'>
                <a href='#about' className='footer-social__link'>
                    <FaInstagram />
                </a>
            </li>
            <li className='footer-social__item'>
                <a href='#about' className='footer-social__link'>
                    <FaFacebookF />
                </a>
            </li>
            <li className='footer-social__item'>
                <a href='#about' className='footer-social__link'>
                    <FaTelegramPlane />
                </a>
            </li>
            <li className='footer-social__item'>
                <a href='#about' className='footer-social__link'>
                    <FaWhatsapp />
                </a>
            </li>
            <li className='footer-social__item'>
                <a href='#about' className='footer-social__link'>
                    <FaYoutube />
                </a>
            </li>
        </Menu>
    );
}

export default FooterSocial;