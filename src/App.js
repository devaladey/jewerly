import './App.css';
import Catalogue from './components/Catalogue/Catalogue';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import JwrCollection from './components/JwrCollections/JwrCollection';
import Navbar from './components/Navbar/Navbar';
import Products from './components/Product/Products';

function App() {
  return (
    <>
      <Navbar />
      <div style={{ display: 'none' }}>
        <Header />
        <JwrCollection />
        <Products />
      </div>
      <Catalogue />
      <Footer />
    </>
  );
}

export default App;
