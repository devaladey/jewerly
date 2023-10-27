import React from 'react'
import './AdminSidebar.css';

const AdminSidebar = () => {
  return (
    <>
        <aside className='aside'>
            <div className='aside__logo'>
                <div className='circle'></div>
                AbiKlean
            </div>
            <div className='aside__menu'>
                <a href='#a' className='aside__link active'>Products</a>
                <a href='#a' className='aside__link'>Orders</a>
            </div>
            <a href='#a' className='aside__link'>Logout</a>
        </aside>
        <footer className='footer'>
            <p>Website made with love by devaladey</p>
        </footer>
    </>
  )
};

export default AdminSidebar;
