import React from "react";
import './Admin.css';
import Sidebar from "../../components/sidebar/Sidebar";
import AddProduct from "../../components/addProduct/AddProduct";
import ListProduct from "../../components/listProduct/ListProduct";
import {Routes, Route} from 'react-router-dom';


const Admin = () => {
    return (
        <div className="admin">
            <Sidebar />
            <Routes>
                <Route path="/addproducts" element={<AddProduct />} />
                <Route path="/listproducts" element={<ListProduct />} />
            </Routes>
        </div>
    )
}

export default Admin;