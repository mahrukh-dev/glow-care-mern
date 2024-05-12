import './App.css';
import { Navbar } from './components/navbar/Navbar';

import Footer from './components/footer/Footer';

import ShopCategory from './pages/ShopCategory';
import ShopPage from './pages/ShopPage';
import Product from './pages/Product';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';


import { BrowserRouter, Routes, Route} from 'react-router-dom';
import ContactUs from './pages/ContactUs';
import Bundles from './pages/Bundles';
import Reviews from './pages/Reviews';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ShopPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/shopcategory1" element={<ShopCategory category="category1"/>} />
          <Route path="/shopcategory2" element={<ShopCategory category="category2"/>} />
          <Route path="/shopcategory3" element={<ShopCategory category="category3"/>} />
          <Route path="product/" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/signup" element={<LoginSignup />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/bundles" element={<Bundles /> } />
          <Route path="/reviews" element={<Reviews /> } />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
