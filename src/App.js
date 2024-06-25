import React, { useState, useEffect } from 'react';
import PersonalInfo from './components/PersonalInfo';
import AddressInfo from './components/AddressInfo';
import Confirmation from './components/Confirmation';
import './index.css';

const App = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!submitted) {
      const savedData = localStorage.getItem('formData');
      if (savedData) {
        setFormData(JSON.parse(savedData));
      }
    } else {
      localStorage.removeItem('formData');
    }
  }, [submitted]);

  const validateStep = (currentStep) => {
    const newErrors = {};
    if (currentStep === 1) {
      if (!formData.name) newErrors.name = 'Name is required';
      if (!formData.email) newErrors.email = 'Email is required';
      if (!formData.phone) newErrors.phone = 'Phone is required';
    } else if (currentStep === 2) {
      if (!formData.address1) newErrors.address1 = 'Address Line 1 is required';
      if (!formData.city) newErrors.city = 'City is required';
      if (!formData.state) newErrors.state = 'State is required';
      if (!formData.zip) newErrors.zip = 'Zip Code is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = () => {
    if (validateStep(3)) {
      // Simulate user database check
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const userExists = users.some(user => user.email === formData.email || user.phone === formData.phone);
  
      if (userExists) {
        setError('User already exists with this email or phone number.');
        setErrors({});
        setFormData({
          ...formData,
          email: '',
          phone: ''
        });
        return;
      }
  
      setLoading(true);
      setError('');
      setTimeout(() => {
        setLoading(false);
        // Simulate network error
        if (Math.random() < 0.3) {
          setError('Network error. Please try again.');
        } else {
          // Save the new user to the "database"
          users.push(formData);
          localStorage.setItem('users', JSON.stringify(users));
  
          // Clear the form and reset the step
          setFormData({
            name: '',
            email: '',
            phone: '',
            address1: '',
            address2: '',
            city: '',
            state: '',
            zip: ''
          });
          setStep(1);
          setSubmitted(true);
          alert('Form submitted successfully!');
        }
      }, 2000);
    }
  };
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    localStorage.setItem('formData', JSON.stringify({
      ...formData,
      [name]: value
    }));
  };

  return (
    <div className="form-container">
      <div className="form-steps">
        <button
          className={step === 1 ? 'active' : ''}
          onClick={() => setStep(1)}
        >
          Step 1
        </button>
        <button
          className={step === 2 ? 'active' : ''}
          onClick={() => setStep(2)}
          disabled={step < 2}
        >
          Step 2
        </button>
        <button
          className={step === 3 ? 'active' : ''}
          onClick={() => setStep(3)}
          disabled={step < 3}
        >
          Step 3
        </button>
      </div>

      <div className={`form-content step-${step}`}>
        {step === 1 && <PersonalInfo formData={formData} handleChange={handleChange} errors={errors} />}
        {step === 2 && <AddressInfo formData={formData} handleChange={handleChange} errors={errors} />}
        {step === 3 && <Confirmation formData={formData} />}
      </div>

      <div className="form-navigation">
        {step > 1 && <button onClick={handleBack}>Back</button>}
        {step < 3 && <button onClick={handleNext}>Next</button>}
        {step === 3 && <button onClick={handleSubmit} disabled={loading}>Submit</button>}
      </div>

      {loading && <div className="loading">Submitting...</div>}
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default App;




// Proper Code
// import React, { useState, useEffect } from 'react';
// import PersonalInfo from './components/PersonalInfo';
// import AddressInfo from './components/AddressInfo';
// import Confirmation from './components/Confirmation';
// import './index.css';

// const App = () => {
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     address1: '',
//     address2: '',
//     city: '',
//     state: '',
//     zip: ''
//   });
//   const [errors, setErrors] = useState({});
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const savedData = localStorage.getItem('formData');
//     if (savedData) {
//       setFormData(JSON.parse(savedData));
//     }
//   }, []);

//   const validateStep = (currentStep) => {
//     const newErrors = {};
//     if (currentStep === 1) {
//       if (!formData.name) newErrors.name = 'Name is required';
//       if (!formData.email) newErrors.email = 'Email is required';
//       if (!formData.phone) newErrors.phone = 'Phone is required';
//     } else if (currentStep === 2) {
//       if (!formData.address1) newErrors.address1 = 'Address Line 1 is required';
//       if (!formData.city) newErrors.city = 'City is required';
//       if (!formData.state) newErrors.state = 'State is required';
//       if (!formData.zip) newErrors.zip = 'Zip Code is required';
//     }
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleNext = () => {
//     if (validateStep(step)) {
//       setStep(step + 1);
//     }
//   };

//   const handleBack = () => {
//     setStep(step - 1);
//   };

//   const handleSubmit = () => {
//     if (validateStep(3)) {
//       setLoading(true);
//       setError('');
//       setTimeout(() => {
//         setLoading(false);
//         // Simulate network error
//         if (Math.random() < 0.3) {
//           setError('Network error. Please try again.');
//         } else {
//           // Clear the form and reset the step
//           setFormData({
//             name: '',
//             email: '',
//             phone: '',
//             address1: '',
//             address2: '',
//             city: '',
//             state: '',
//             zip: ''
//           });
//           setStep(1);
//           localStorage.removeItem('formData');
//         }
//       }, 2000);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//     localStorage.setItem('formData', JSON.stringify({
//       ...formData,
//       [name]: value
//     }));
//   };

//   return (
//     <div className="form-container">
//       <div className="form-steps">
//         <button
//           className={step === 1 ? 'active' : ''}
//           onClick={() => setStep(1)}
//         >
//           Step 1
//         </button>
//         <button
//           className={step === 2 ? 'active' : ''}
//           onClick={() => setStep(2)}
//           disabled={step < 2}
//         >
//           Step 2
//         </button>
//         <button
//           className={step === 3 ? 'active' : ''}
//           onClick={() => setStep(3)}
//           disabled={step < 3}
//         >
//           Step 3
//         </button>
//       </div>

//       <div className={`form-content step-${step}`}>
//         {step === 1 && <PersonalInfo formData={formData} handleChange={handleChange} errors={errors} />}
//         {step === 2 && <AddressInfo formData={formData} handleChange={handleChange} errors={errors} />}
//         {step === 3 && <Confirmation formData={formData} />}
//       </div>

//       <div className="form-navigation">
//         {step > 1 && <button onClick={handleBack}>Back</button>}
//         {step < 3 && <button onClick={handleNext}>Next</button>}
//         {step === 3 && <button onClick={handleSubmit} disabled={loading}>Submit</button>}
//       </div>

//       {loading && <div className="loading">Submitting...</div>}
//       {error && <div className="error">{error}</div>}
//     </div>
//   );
// };

// export default App;
