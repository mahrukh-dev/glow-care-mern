import React, {useState} from 'react'
import './ListProduct.css'
import { useEffect } from 'react';
import cross_icon from '../../assets/icon/remove_icon.png'

const ListProduct = () => {

  const [allproducts, setAllProducts] = useState([]); // state to store all products

  const fetchInfo = async () => {
    await fetch('http://localhost:4000/allproducts')
    .then((res)=>res.json())
    .then((data)=>{setAllProducts(data)});
  }

  useEffect(() => {
    fetchInfo();
  },[])

  return (
    <div className="list-product">
      <h1>All Products List</h1>
      <div className='listproduct-format-main'>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Description</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-allproducts">
        <hr />
        {allproducts.map((product, index)=>{
          return <div key={index} className="listproduct-format-main listproduct-format">
            <img src={product.img} alt="" className="listproduct-product-icon" />
            <p>{product.name}</p>
            <p>${product.price}</p>
            <p>{product.description}</p>
            <p>{product.category}</p>
            <img src={cross_icon} alt="" className="listproduct-remove-icon" />
          </div>
        })}
      </div>
    </div>
  )
}

export default ListProduct