import './CircularCard.css';

export const CircularCardTopLeft = ({children, className})=> {
    return ( 
        <div className={`circular-card circular-card--top-left ${className}`}>{children}</div>
     );
}

export const CircularCardTopRight = ({children, className})=> {
    return ( 
        <div className={`circular-card circular-card--top-right ${className}`}>{children}</div>
     );
}

export const CircularCardBottomLeft = ({children, className})=> {
    return ( 
        <div className={`circular-card circular-card--bottom-left ${className}`}>{children}</div>
     );
}

export const CircularCardBottomRight = ({children, className})=> {
    return ( 
        <div className={`circular-card circular-card--bottom-right ${className}`}>{children}</div>
     );
}

export const CircularCardPerfect = ({children, className})=> {
    return ( 
        <div className={`circular-card ${className}`}>{children}</div>
     );
}