import './PrimaryHeading.css';

function PrimaryHeading({children, className}) {
    return ( 
        <h1 className={`primary-heading ${className}`}>{children}</h1>
     );
}

export default PrimaryHeading;