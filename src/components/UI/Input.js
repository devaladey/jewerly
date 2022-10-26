import {FaArrowRight} from 'react-icons/fa'
import './Input.css';

function Input({type='text', placeholder, className}) {
    return ( 
        <div className='input-control'>
            <input type={type} placeholder={placeholder} className={`input ${className}`} />
            <button type='button' className='input-action'><FaArrowRight /></button>
        </div>
     );
}

export default Input;