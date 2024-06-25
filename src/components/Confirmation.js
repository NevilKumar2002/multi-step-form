import React from 'react';

const Confirmation = ({ formData }) => {
  return (
    <div className="confirmation-container">
      <h2>Confirmation</h2>
      <div className="confirmation-row">
        <div className="confirmation-label">Name:</div>
        <div className="confirmation-data">{formData.name}</div>
      </div>
      <div className="confirmation-row">
        <div className="confirmation-label">Email:</div>
        <div className="confirmation-data">{formData.email}</div>
      </div>
      <div className="confirmation-row">
        <div className="confirmation-label">Phone:</div>
        <div className="confirmation-data">{formData.phone}</div>
      </div>
      <div className="confirmation-row">
        <div className="confirmation-label">Address Line 1:</div>
        <div className="confirmation-data">{formData.address1}</div>
      </div>
      <div className="confirmation-row">
        <div className="confirmation-label">Address Line 2:</div>
        <div className="confirmation-data">{formData.address2}</div>
      </div>
      <div className="confirmation-row">
        <div className="confirmation-label">City:</div>
        <div className="confirmation-data">{formData.city}</div>
      </div>
      <div className="confirmation-row">
        <div className="confirmation-label">State:</div>
        <div className="confirmation-data">{formData.state}</div>
      </div>
      <div className="confirmation-row">
        <div className="confirmation-label">Zip Code:</div>
        <div className="confirmation-data">{formData.zip}</div>
      </div>
    </div>
  );
};

export default Confirmation;

// import React from 'react';

// const Confirmation = ({ formData }) => {
//   return (
//     <div>
//       <h2>Confirmation</h2>
//       <div>
//         <strong>Name:</strong> {formData.name}
//         <hr/>
//       </div>
    
//       <div>
//         <strong>Email:</strong> {formData.email}
//         <hr/>
//       </div>
//       <div>
//         <strong>Phone:</strong> {formData.phone}
//         <hr/>
//       </div>
//       <div>
//         <strong>Address Line 1:</strong> {formData.address1}
//         <hr/>
//       </div>
//       <div>
//         <strong>Address Line 2:</strong> {formData.address2}
//         <hr/>
//       </div>
//       <div>
//         <strong>City:</strong> {formData.city}
//         <hr/>
//       </div>
//       <div>
//         <strong>State:</strong> {formData.state}
//         <hr/>
//       </div>
//       <div>
//         <strong>Zip Code:</strong> <p>{formData.zip}</p>
//         <hr/>
//       </div>
//     </div>
//   );
// };

// export default Confirmation;
