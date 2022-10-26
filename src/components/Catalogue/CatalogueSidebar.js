import { FaCaretUp } from 'react-icons/fa';
import Button from '../UI/Button';
import './CatalogueSidebar.css';

function CatalogueSidebar() {
    return (
        <aside className='catalogue-sidebar'>
            <h2 className='catalogue-sidebar__title'>Filter</h2>
            <div className='catalogue-sidebar__row'>
                <div className='catalogue-sidebar__heading'>
                    <p className='catalogue-sidebar__price'>Price</p>
                    <button><FaCaretUp /></button>
                </div>
                <div className='catalogue-sidebar__inputs'>
                    <input className='catalogue-sidebar__input' />
                    <input className='catalogue-sidebar__input' />
                </div>
            </div>
            <div className='catalogue-sidebar__row'>
                <div className='catalogue-sidebar__heading'>
                    <p className='catalogue-sidebar__price'>Size</p>
                    <button><FaCaretUp /></button>
                </div>
                <div className='catalogue-sidebar__checkboxes'>
                    <div className='catalogue-sidebar__checkbox-control'>
                        <input type='checkbox' id='check' className='catalogue-sidebar__checkbox' />
                        <label htmlFor='check' className='catalogue-sidebar__checkbox-label'>11</label>
                    </div>
                    <div className='catalogue-sidebar__checkbox-control'>
                        <input type='checkbox' id='check1' className='catalogue-sidebar__checkbox' />
                        <label htmlFor='check1' className='catalogue-sidebar__checkbox-label'>11</label>
                    </div>
                    <div className='catalogue-sidebar__checkbox-control'>
                        <input type='checkbox' id='check2' className='catalogue-sidebar__checkbox' />
                        <label htmlFor='check2' className='catalogue-sidebar__checkbox-label'>11</label>
                    </div>
                </div>
            </div>
            <div className='catalogue-sidebar__row'>
                <div className='catalogue-sidebar__heading'>
                    <p className='catalogue-sidebar__price'>See all</p>
                </div>
            </div>
            <div className='catalogue-sidebar__row'>
                <div className='catalogue-sidebar__heading'>
                    <p className='catalogue-sidebar__price'>Type of metal</p>
                    <button><FaCaretUp /></button>
                </div>
            </div>
            <div className='catalogue-sidebar__row'>
                <div className='catalogue-sidebar__heading'>
                    <p className='catalogue-sidebar__price'>Insert</p>
                    <button><FaCaretUp /></button>
                </div>
            </div>
            <div className='catalogue-sidebar__row'>
                <div className='catalogue-sidebar__heading'>
                    <p className='catalogue-sidebar__price'>Color</p>
                    <button><FaCaretUp /></button>
                </div>
                <div className='catalogue-sidebar__colors'>
                    <div className='catalogue-sidebar__color' />
                    <div className='catalogue-sidebar__color' />
                    <div className='catalogue-sidebar__color' />
                    <div className='catalogue-sidebar__color' />
                    <div className='catalogue-sidebar__color' />
                </div>
            </div>
            <Button className='catalogue-sidebar__clear-btn'>CLEAR</Button>

        </aside>
    );
}

export default CatalogueSidebar;