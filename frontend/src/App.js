import './App.css';
import { Navbar } from './components/navbar/Navbar';

import Footer from './components/footer/Footer';

import ShopCategory from './pages/ShopCategory';
import ShopPage from './pages/ShopPage';
import Product from './pages/Product';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';


import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Category from './pages/Category';
import Recommendations from './pages/Recommendations';
import AdminRecom from './pages/AdminRecom';
import PaymentPage from './pages/PaymentPage';

import categoryOneBanner from './components/assets/icons/shopping_cat.png';
import categoryTwoBanner from './components/assets/icons/shopping_cat.png';
import categoryThreeBanner from './components/assets/icons/shopping_cat.png';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ShopPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/shopcategory1" element={
            <ShopCategory category="Category 1" banner={categoryOneBanner}/>
            } />
          <Route path="/shopcategory2" element={<ShopCategory category="Category 2" banner={categoryTwoBanner}/>} />
          <Route path="/shopcategory3" element={<ShopCategory category="Category 3" banner={categoryThreeBanner}/>} />
          <Route path="product/" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/signup" element={<LoginSignup />} />
          <Route path="/category" element={<Category />} />
          <Route path="/recommendations" element={<Recommendations /> } />
          <Route path="/adminrecom" element={<AdminRecom /> } />                                                                                                                                
          <Route path="/payment" element={<PaymentPage />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
