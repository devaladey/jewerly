import { Routes, Route } from "react-router-dom";
import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import CartScreen from "./Screens/Cart/CartScreen";
import CatalogueScreen from "./Screens/Catalogue/CatalogueScreen";
import ContactScreen from "./Screens/Contact/ContactScreen";
import HomeScreen from "./Screens/Home/HomeScreen";
import NotFoundScreen from "./Screens/NotFound/NotFoundScreen";
import ProductDetailScreen from "./Screens/ProductDetail/ProductDetailScreen";
import AdminScreen from "./Screens/admin/AdminScreen";

function App() {

  

  return (
    <>
      {true && <Navbar />}
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/cart' element={<CartScreen />} />
        <Route path='/contact' element={<ContactScreen />} />
        <Route path='/catalogue' element={<CatalogueScreen />} />
        <Route path='/product-detail' element={<ProductDetailScreen />} />
        <Route path='/admin' element={<AdminScreen />} />
        <Route path='*' element={<NotFoundScreen />} />
      </Routes>
      {true && <Footer />}
    </>
  );
}

export default App;
