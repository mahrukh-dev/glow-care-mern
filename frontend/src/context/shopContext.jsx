import React from "react";
import all_products from "../components/assets/products/all_products";

export const ShopContext = React.createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_products.length + 1; index++) {
        cart[index] = 0;
    }
    return cart;
}   

const ShopContextProvider = ( props ) => {
    const [cartItems, setCartItems] = React.useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItems((prev)=>({...prev, [itemId]: prev[itemId]+1}))
    
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev)=>({...prev, [itemId]: prev[itemId]-1}))
    }

    const contextValue = { all_products, cartItems, addToCart, removeFromCart};
 

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;