import React from "react"
import './Popular.css'
import all_products from '../assets/products/all_products'
import Item from '../item/Item'

const Popular = () => {
    return (
        <div className="popular">
            <h1>POPULAR PRODUCTS</h1>
            <hr />
            <div className="popular-item">
                {all_products.map((item, i) => {
                    return <Item key={i} id={item.id} category={item.category} name={item.name} image={item.image} price={item.price}/>
                })}
            </div>
        </div>
    )
}

export default Popular