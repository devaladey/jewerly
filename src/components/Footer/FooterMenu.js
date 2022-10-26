import './FooterMenu.css';

function FooterMenu({ menu }) {
    return (
        <ul className='footer-menu'>
            {
                menu.map(el => (
                    <li className='footer-menu__item' key={el}>
                        <a href='#about' className='footer-menu__link'>
                            {el}
                        </a>
                    </li>
                ))
            }
        </ul>
    );
}

export default FooterMenu;