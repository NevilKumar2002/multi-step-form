// src/components/AddressInfo.js
import React from 'react';

const AddressInfo = ({ formData, errors, handleChange }) => {
  return (
    <div>
      <h2>Address Information</h2>
      <div>
        <label>Address Line 1:</label>
        <input type="text" name="address1" value={formData.address1} onChange={handleChange} />
        {errors.address1 && <span className="error">{errors.address1}</span>}
      </div>
      <div>
        <label>Address Line 2:</label>
        <input type="text" name="address2" value={formData.address2} onChange={handleChange} />
      </div>
      <div>
        <label>City:</label>
        <input type="text" name="city" value={formData.city} onChange={handleChange} />
        {errors.city && <span className="error">{errors.city}</span>}
      </div>
      <div>
        <label>State:</label>
        <input type="text" name="state" value={formData.state} onChange={handleChange} />
        {errors.state && <span className="error">{errors.state}</span>}
      </div>
      <div>
        <label>Zip Code:</label>
        <input type="text" name="zip" value={formData.zip} onChange={handleChange} />
        {errors.zip && <span className="error">{errors.zip}</span>}
      </div>
    </div>
  );
};

export default AddressInfo;
