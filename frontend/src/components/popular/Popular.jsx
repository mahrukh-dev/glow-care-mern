import React from "react"
import './Popular.css'
import Item from '../item/Item'

const Popular = () => {
    const [popular_products, setPopular_Products] = React.useState([]);
    React.useEffect(() => {
        fetch('http://localhost:4000/popular')
        .then((response) => response.json())
        .then((data) => {
            setPopular_Products(data);
        });
    }, []);
    return (
        <div className="popular">
            <h1>POPULAR PRODUCTS</h1>
            <hr />
            <div className="popular-item">
                {popular_products.map((item, i) => {
                    return <Item key={i} id={item.id} category={item.category} name={item.name} image={item.image} price={item.price}/>
                })}
            </div>
        </div>
    )
}

export default Popular