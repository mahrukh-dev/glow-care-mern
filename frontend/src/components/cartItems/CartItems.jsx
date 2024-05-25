import React from "react";
import './CartItems.css';
import { shopContext } from '../context/shopContext';
import remove_icon from '../assets/icons/remove_icon.png';

const CartItems = () => {
    const { all_products, cartItems, removeFromCart } = React.useContext(shopContext);
    return (
        <div className="cartitems">
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr/>
           {all_products.map((e)=>{
            if(cartItems[e.id] > 0){
                return(
                    <div>
                <div className="cartitems-format">
                    <img src={e.image} alt="" className="carticon-product-icon"/>
                    <p>{e.name}</p>
                    <p>{e.price}</p>
                    <button className="cartitems-quantity">{cartItems[e.id]}</button>
                    <p>{e.price*cartItems[e.id]}</p>
                    <img src={remove_icon} onClick={() => {removeFromCart(e.id)}} alt=""/>
                </div>
                <hr/>
            </div>
                )
            }
           })} 
        </div>
    );
}

export default CartItems;