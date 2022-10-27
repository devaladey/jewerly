import './ContactInfo.css';

function ContactInfo({title, description}) {
    return ( 
        <div className='contact-info'>
            <h4 className='contact-info__title'>{title}</h4>
            <p className='contact-info__para'>{description}</p>
        </div>
     );
}

export default ContactInfo;