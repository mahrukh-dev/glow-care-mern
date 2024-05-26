// src/components/AdminPanel.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PatientRequest = () => {
    const [requests, setRequests] = useState([]);
    const [selectedRequest, setSelectedRequest] = useState(null);
    const [recommendedProducts, setRecommendedProducts] = useState('');

    useEffect(() => {
        const fetchRequests = async () => {
            const response = await axios.get('http://localhost:4000/getrequest');
            console.log(response.data);
            setRequests(response.data);
        };
        fetchRequests();
    }, []);

    const handleSelectRequest = (request) => {
        setSelectedRequest(request);
    };

    const handleRecommend = async () => {
        if (!selectedRequest) return;

        try {
            console.log(selectedRequest.userId)
            await axios.post(`http://localhost:4000/${selectedRequest.userId}`, {
                recommendedProducts: recommendedProducts.split(','),
            });
            alert('Recommendation submitted successfully');
            setSelectedRequest(null);
            setRecommendedProducts('');
            const response = await axios.get('http://localhost:4000/${selectedRequest.userId}');
            setRequests(response.data);
        } catch (err) {
            console.error(err);
            alert('Failed to submit recommendation');
        }
    };

    return (
        <div>
            <h1>Admin Panel</h1>
            <ul>
                {requests.map((request) => (
                    <li key={request._id}>
                        {request.name} - {request.email} - {request.status}-{request._id}
                        <button onClick={() => handleSelectRequest(request)}>Recommend</button>
                    </li>
                ))}
            </ul>

            {selectedRequest && (
                <div>
                    <h2>Recommend Products for {selectedRequest.name}</h2>
                    <textarea
                        value={recommendedProducts}
                        onChange={(e) => setRecommendedProducts(e.target.value)}
                        placeholder="Comma separated product names"
                    />
                    <button onClick={handleRecommend}>Submit Recommendation</button>
                </div>
            )}
        </div>
    );
};

export default PatientRequest;
