import React from "react";
import './Popular.css';
import Item from '../item/Item';

const Popular = () => {
    const [popular_products, setPopular_Products] = React.useState([]);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        const fetchPopularProducts = async () => {
            try {
                const response = await fetch('http://localhost:4000/popular');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setPopular_Products(data);
            } catch (error) {
                setError(error.message);
                console.error("Failed to fetch popular products:", error);
            }
        };

        fetchPopularProducts();
    }, []);

    return (
        <div className="popular">
            <h1>POPULAR PRODUCTS</h1>
            <hr />
            {error ? (
                <p className="error">Error: {error}</p>
            ) : (
                <div className="popular-item">
                    {popular_products.map((item, i) => (
                        <Item key={i} id={item.id} category={item.category} name={item.name} image={item.image} price={item.price} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Popular;
