// src/components/UserRequestForm.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './css/Bundles.css';
import { jwtDecode } from 'jwt-decode';

const Bundles = () => {
  const [userId, setUserID] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    skinType: '',
    issues: '',
    userId: ''
  });

  const handleChange = (e) => {
    console.log(userId)
    e.userId = userId;
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const getUserIdFromToken = (token) => {
    console.log('Token:', token);
    if (!token) return null;

    try {
      const decoded = jwtDecode(token);
      console.log("Decoded:", decoded); // Log the entire decoded payload
      return decoded.user.id; // Access the user ID from the nested user object
    } catch (error) {
      console.error('Invalid token:', error);
      return null;
    }
  };
  useEffect(() => {
    console.log('Auth token:', localStorage.getItem('auth-token'));
    const userId = getUserIdFromToken(localStorage.getItem('auth-token'));
    setUserID(userId);
    console.log('User ID:', userId);
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      formData.userId = userId;
      await axios.post('http://localhost:4000/createrequest', formData);
      alert('Request submitted successfully');
      setFormData({ name: '', email: '', skinType: '', issues: '' });
    } catch (err) {
      console.error(err);
      alert('Failed to submit request');
    }
  };

  return (
    <div className="user-request-form-container">
      <form onSubmit={handleSubmit}>
        <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
        <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
        <input name="skinType" value={formData.skinType} onChange={handleChange} placeholder="Skin Type" required />
        <textarea name="issues" value={formData.issues} onChange={handleChange} placeholder="Skin Issues" required />
        <button type="submit">Submit</button>
      </form>
    </div>

  );
};

export default Bundles;
