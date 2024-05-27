// src/pages/Category.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from '../components/sidebar/Sidebar';
import ShopCategory from './ShopCategory';

import categoryOneBanner from '../components/assets/icons/shopping_cat.png';
import categoryTwoBanner from '../components/assets/icons/shopping_cat.png';
import categoryThreeBanner from '../components/assets/icons/shopping_cat.png';

const Category = () => {
  return (
      <div className="app-container">
        <Sidebar />
        <div className="category-content">
          <Routes>
            <Route path="/shopcategory1" element={<ShopCategory category="Shop Category 1" banner={categoryOneBanner} />} />
            <Route path="/shopcategory2" element={<ShopCategory category="Shop Category 2" banner={categoryTwoBanner} />} />
            <Route path="/shopcategory3" element={<ShopCategory category="Shop Category 3" banner={categoryThreeBanner} />} />
          </Routes>
        </div>
      </div>
  );
};

export default Category;
