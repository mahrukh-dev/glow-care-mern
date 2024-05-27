import React, { useState, useEffect } from 'react';
import './NewCollection.css';
import Item from '../item/Item';

const NewCollection = () => {
    const [newCollection, setNewCollection] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:4000/newcollection')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                return response.json();
            })
            .then((data) => {
                setNewCollection(data);
            })
            .catch((error) => {
                setError(error.message);
            });
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className='new-collections'>
            <h1>New Collections</h1>
            <hr />
            <div className='collections'>
                {newCollection.map((item, i) => (
                    <Item key={i} id={item.id} category={item.category} name={item.name} image={item.image} price={item.price}/>
                ))}
            </div>
        </div>
    );
}

export default NewCollection;
