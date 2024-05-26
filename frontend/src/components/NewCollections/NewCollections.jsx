import React, {useState} from 'react'
import './NewCollection.css'
import Item from '../item/Item'
import { useEffect } from 'react'

const NewCollection = ()=>{
   const [new_collection, setNew_Collection] = useState([]);
   useEffect(()=>{
      fetch('http://localhost:4000/newcollection')
      .then((response) => response.json())
      .then((data) => {
          setNew_Collection(data);
      });
   }, []);

    return(
       <div className='new-collections'>
            <h1>New Collections</h1>
            <hr />
            <div className='collections'>
                   {new_collection.map((item,i)=> {
                    return <Item key={i} id={item.id} category={item.category} name={item.name} image={item.image} price={item.price}/>
                 })}
            </div>
       </div>
    )
}
export default NewCollection