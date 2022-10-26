import './FooterHeading.css';

function FooterHeading({ children }) {
    return ( 
        <h3 className='footer-heading'>{children}</h3>
     );
}

export default FooterHeading;