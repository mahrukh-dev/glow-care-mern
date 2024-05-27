import React, { useEffect } from "react";

export const ShopContext = React.createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < 300 + 1; index++) {
        cart[index] = 0;
    }
    return cart;
};

const ShopContextProvider = (props) => {
    const [all_products, setAllProducts] = React.useState([]);
    const [cartItems, setCartItems] = React.useState(getDefaultCart());

    useEffect(() => {
        const fetchAllProducts = async () => {
            try {
                const response = await fetch('http://localhost:4000/allproducts');
                const data = await response.json();
                setAllProducts(data);
            } catch (error) {
                console.error("Failed to fetch all products:", error);
            }
        };

        const fetchCartItems = async () => {
            if (localStorage.getItem('auth-token')) {
                try {
                    const response = await fetch('http://localhost:4000/getcart', {
                        method: 'POST',
                        headers: {
                            Accept: 'application/json',
                            'auth-token': `${localStorage.getItem('auth-token')}`,
                            'Content-Type': 'application/json'
                        },
                        body: "",
                    });
                    const data = await response.json();
                    setCartItems(data);
                } catch (error) {
                    console.error("Failed to fetch cart items:", error);
                }
            }
        };

        fetchAllProducts();
        fetchCartItems();
    }, []);

    const addToCart = async (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        if (localStorage.getItem('auth-token')) {
            try {
                const response = await fetch('http://localhost:4000/addtocart', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        'auth-token': `${localStorage.getItem('auth-token')}`,
                    },
                    body: JSON.stringify({ "itemId": itemId }),
                });
                const data = await response.json();
                console.log(data);
            } catch (error) {
                console.error("Failed to add item to cart:", error);
            }
        }
    };

    const removeFromCart = async (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
        if (localStorage.getItem('auth-token')) {
            try {
                const response = await fetch('http://localhost:4000/removefromcart', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        'auth-token': `${localStorage.getItem('auth-token')}`,
                    },
                    body: JSON.stringify({ "itemId": itemId }),
                });
                const data = await response.json();
                console.log(data);
            } catch (error) {
                console.error("Failed to remove item from cart:", error);
            }
        }
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_products.find((product) => product.id === Number(item));
                totalAmount += itemInfo.price * cartItems[item];
            }
        }
        return totalAmount;
    };

    const getTotalCartItems = () => {
        let totalItem = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    };

    const contextValue = { getTotalCartAmount, getTotalCartItems, all_products, cartItems, addToCart, removeFromCart };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
