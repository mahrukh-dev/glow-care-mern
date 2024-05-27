// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import category1_icon from '../assets/icons/shopping_cat.png';
import category2_icon from '../assets/icons/shopping_cat.png';
import category3_icon from '../assets/icons/shopping_cat.png';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/shopcategory1" className="sidebar-item">
        <img src={category1_icon} alt="Shop Category 1" />
        <p>Shop Category 1</p>
      </Link>
      <Link to="/shopcategory2" className="sidebar-item">
        <img src={category2_icon} alt="Shop Category 2" />
        <p>Shop Category 2</p>
      </Link>
      <Link to="/shopcategory3" className="sidebar-item">
        <img src={category3_icon} alt="Shop Category 3" />
        <p>Shop Category 3</p>
      </Link>
    </div>
  );
};

export default Sidebar;
