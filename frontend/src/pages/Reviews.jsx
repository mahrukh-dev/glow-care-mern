// src/components/UserRecommendations.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './css/Reviews.css';
import { jwtDecode } from "jwt-decode";

const Reviews = () => {
    const [recommendation, setRecommendation] = useState(null); // Single recommendation object
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchRecommendations = async () => {
        try {
            const token = localStorage.getItem('auth-token');
            const userId = getUserIdFromToken(token);
            console.log('User ID:', userId);
            const response = await axios.get(`http://localhost:4000/${userId}`);
            console.log('Response:', response.data);

            setRecommendation(response.data);
            setLoading(false);
        } catch (error) {
            setError('Error fetching recommendation');
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchRecommendations();
    }, []);

    const getUserIdFromToken = (token) => {
        if (!token) return null;
        try {
            const decoded = jwtDecode(token);
            return decoded.user.id;
        } catch (error) {
            console.error('Invalid token:', error);
            return null;
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className='user-recommendations-container'>
            <h1>Admin Recommendation</h1>
            {recommendation ? (
                <div>
                    <h2>Recommendation for Request ID: {recommendation.userRequestId?._id || 'N/A'}</h2>
                    <ul>
                        {recommendation.recommendedProducts.map((product, index) => (
                            <li key={index}>{product}</li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p>No recommendation found.</p>
            )}
        </div>
    );
};

export default Reviews;
