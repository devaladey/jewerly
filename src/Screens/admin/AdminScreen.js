import './AdminScreen.css';
import AdminSidebar from './AdminSidebar';
import TopNav from './TopNav';

function AdminScreen() {
    return ( 
        <>
        <TopNav />
        <AdminSidebar />
        <main className='admin'>
            <div className='products'>
                <div className='product'></div>
            </div>
        </main>
        </>
     );
}

export default AdminScreen;