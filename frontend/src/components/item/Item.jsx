import React from "react"
import './Item.css'

const Item = (props) => {
    return (    
        <div className="item">
            <img src={props.image} alt="" /> 
             <div className="item-details">
                <h3>{props.name}</h3>
                <p>${props.price}</p>
            </div>
        </div>
    )
}

export default Item