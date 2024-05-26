// src/components/PatientRequest.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './PatientRequest.css';

const PatientRequest = () => {
    const [requests, setRequests] = useState([]);
    const [selectedRequest, setSelectedRequest] = useState(null);
    const [recommendedProducts, setRecommendedProducts] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchRequests = async () => {
            const response = await axios.get('http://localhost:4000/getrequest');
            setRequests(response.data);
        };
        fetchRequests();
    }, []);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios.get('http://localhost:4000/allproducts');
            setProducts(response.data);
        };
        fetchProducts();
    }, []);

    const handleSelectRequest = (request) => {
        setSelectedRequest(request);
    };

    const handleRecommend = async () => {
        if (!selectedRequest) return;

        try {
            await axios.post(`http://localhost:4000/${selectedRequest.userId}`, {
                recommendedProducts: recommendedProducts,
            });
            alert('Recommendation submitted successfully');
            setSelectedRequest(null);
            setRecommendedProducts([]);
        } catch (err) {
            console.error(err);
            alert('Failed to submit recommendation');
        }
    };

    const handleProductCheckboxChange = (productId) => {
        const index = recommendedProducts.indexOf(productId);
        if (index === -1) {
            setRecommendedProducts([...recommendedProducts, productId]);
        } else {
            setRecommendedProducts(recommendedProducts.filter(id => id !== productId));
        }
    };

    return (
        <div className="admin-panel">
            <h1>Admin Panel</h1>
            <ul className="request-list">
                {requests.map((request) => (
                    <li key={request._id}>
                        {request.name} - {request.email} - {request.status} - {request._id}
                        <button onClick={() => handleSelectRequest(request)}>Recommend</button>
                    </li>
                ))}
            </ul>

            {selectedRequest && (
                <div className="recommendation-section">
                    <h2>Recommend Products for {selectedRequest.name}</h2>
                    <div className="products-list">
                        {products.map(product => (
                            <div key={product.id}>
                                <input
                                    type="checkbox"
                                    id={product.id}
                                    checked={recommendedProducts.includes(product.id)}
                                    onChange={() => handleProductCheckboxChange(product.id)}
                                />
                                <label htmlFor={product.id}>{product.name}</label>
                            </div>
                        ))}
                    </div>
                    <button onClick={handleRecommend}>Submit Recommendation</button>
                </div>
            )}
        </div>
    );
};

export default PatientRequest;
