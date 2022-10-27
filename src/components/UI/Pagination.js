import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { CircularCardBottomRight as Pill } from './CircularCard';
import './Pagination.css';

function Pagination({ pages = 10, className }) {
    return (
        <div className={`pagination ${className}`}>
            <button className='pagination__btn'>
                <FaArrowLeft />
            </button>
            <div className='pagination__pills'>
            {Array.from(new Array(pages)).map((el, i) => (
                <Pill className={`pagination__pill ${i === 0 && 'active'}`} key={i}>{i + 1}</Pill>
            ))}
            </div>
            <button className='pagination__btn'>
                <FaArrowRight />
            </button>
        </div>
    );
}

export default Pagination;