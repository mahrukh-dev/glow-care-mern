import React, { useState } from 'react';
import axios from 'axios';
import './css/Bundles.css';

const Bundles = () => {
    const [formData, setFormData] = useState({
        userId: '',
        skinType: 'oily',
        skinConcerns: '',
        allergies: ''
    });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            ...formData,
            skinConcerns: formData.skinConcerns.split(',').map(concern => concern.trim()),
            allergies: formData.allergies.split(',').map(allergy => allergy.trim())
        };

        try {
            const response = await axios.post('http://localhost:4000/userskintype', data);
            if (response.data.success) {
                setMessage('Skin type profile created successfully');
            } else {
                setMessage('Failed to create skin type profile');
            }
        } catch (error) {
            console.error('Error creating skin type profile:', error);
            setMessage('Server error. Please try again later.');
        }
    };

    return (
        <div className="add-skin-type-form">
            <h2>Add Skin Type Profile</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="userId">User ID:</label>
                    <input type="text" id="userId" name="userId" value={formData.userId} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="skinType">Skin Type:</label>
                    <select id="skinType" name="skinType" value={formData.skinType} onChange={handleChange} required>
                        <option value="oily">Oily</option>
                        <option value="dry">Dry</option>
                        <option value="combination">Combination</option>
                        <option value="normal">Normal</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="skinConcerns">Skin Concerns (comma separated):</label>
                    <input type="text" id="skinConcerns" name="skinConcerns" value={formData.skinConcerns} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="allergies">Allergies (comma separated):</label>
                    <input type="text" id="allergies" name="allergies" value={formData.allergies} onChange={handleChange} />
                </div>
                <button type="submit">Submit</button>
            </form>
            {message && <p className="message">{message}</p>}
        </div>
    );
};

export default Bundles;
