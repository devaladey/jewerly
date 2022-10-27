import {FaBars, FaCaretDown, FaWindows} from 'react-icons/fa'
import PrimaryHeading from '../Typography/PrimaryHeading';
import './CatalogueHeader.css';

function CatalogueHeader({ label= 'Bracelets', title='BRACELETS', showIcons = true, extramain}) {
    return (
        <header className='catalogue-header'>
            <div className='catalogue-header__top'>
                <span>Main. {extramain}</span>
                <span>{label}</span>
            </div>
            <PrimaryHeading className='catalogue-header__heading'>{title}</PrimaryHeading>
            { showIcons && (<div className='catalogue-header__bottom'>
                <h2>Trending. <button><FaCaretDown /></button></h2>
                <span className='catalogue-header__icon'><FaWindows /></span>
                <span className='catalogue-header__icon'><FaBars /></span>
            </div>)}
        </header>
    );
}

export default CatalogueHeader;