import React from 'react'
import './NewCollection.css'
import new_collection from '../assets/new-collection/new-collection'
import Item from '../item/Item'

const NewCollection = ()=>{
    return(
       <div className='new-collections'>
            <h1>New Collections</h1>
            <hr />
            <div className='collections'>
                   {new_collection.map((item,i)=>
                   {
                    return <Item key={i} id={item.id} category={item.category} name={item.name} image={item.image} price={item.price}/>
                 })}
            </div>
       </div>
    )
}
export default NewCollection