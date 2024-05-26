import React from 'react'
import './AddProduct.css'
import upload_area from '../../assets/upload_area.png'

const AddProduct = () => {
  return (
    <div className="add-product">
        <div className="addproduct-itemfield">
            <p>Product Title</p>
            <input type="text" name='name' placeholder='Type Here'/>
        </div>
        <div className="addproduct-price">
            <div className="addproduct-itemfield">
                <p>Product Price</p>
                <input type="text" name='price' placeholder='Type Here'/>
            </div>
        </div>
        <div className="addproduct-itemfield">
            <p>Product Category</p>
            <select name='category' className='add-product-selector'>
                <option value="Category 1">Category 1</option>
                <option value="Category 2">Category 2</option>
                <option value="Category 3">Category 3</option>
            </select>
        </div>
        <div className="addproduct-itemfield">
            <p>Product Description</p>
            <textarea name='description' placeholder='Type Here'></textarea>
        </div>
        <div className="addproduct-itemfield">
            <label htmlFor='file-input'>
                <img src={upload_area} className='addproduct-thumbnail-img' alt="Upload Thumbnail"/>
            </label>
            <input type='file' name='image' id='file-input' hidden/>
        </div>
        <button className="addproduct-btn">Add Product</button>
    </div>
  )
}

export default AddProduct
