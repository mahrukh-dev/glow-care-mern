import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './css/AdminRecom.css';
import { jwtDecode } from "jwt-decode";

const AdminRecom = () => {
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
            <h2>Recommendation from the Doctor to use these products:</h2>
            <ul>
                {recommendation ? (
                    recommendation.recommendedProducts.map((product, index) => (
                        <li key={index}>{product}</li>
                    ))
                ) : (
                    <p>No recommendation found.</p>
                )}
            </ul>
        </div>
    );
};

export default AdminRecom;
