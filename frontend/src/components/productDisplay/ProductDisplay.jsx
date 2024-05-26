import React, {useContext} from 'react'
import './ProductDisplay.css'
import star_icon from '../assets/icons/star_icon.png'
import star_dull_icon from '../assets/icons/star_dull_icon.png'
import { ShopContext } from '../../context/shopContext';

const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(ShopContext);
    
  return (  
    <div className="productdisplay">
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>
            </div>
            <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={product.image} alt=''/>
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
                ${product.price}
            </div>
            <div className="productdisplay-right-description">
            <p>This is a high-quality skincare product.
                It helps to maintain your skin's health and vitality.</p>
            </div>
            <div className="productdisplay-right-size">
                <h1>Select Size</h1>
                <div className="productdisplay-right-size">
                    <div>50ml</div>
                    <div>100ml</div>
                    <div>150ml</div>
                    <div>500ml</div>
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>Add To Cart</button>
            <p className='productdisplay-right-category'><span>Category: </span>Eyes, Serum</p>
            <p className='productdisplay-right-category'><span>Tags: </span>Skincare, eyecare</p>
        </div>
    </div>
  )
}

export default ProductDisplay