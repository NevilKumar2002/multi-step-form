
import React from 'react';

const PersonalInfo = ({ formData, errors, handleChange }) => {
  return (
    <div>
      <h2>Personal Information</h2>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
      <div className='label-input-div'>
        <label>Phone:</label>
        <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
        {errors.phone && <span className="error">{errors.phone}</span>}
      </div>
    </div>
  );
};

export default PersonalInfo;
