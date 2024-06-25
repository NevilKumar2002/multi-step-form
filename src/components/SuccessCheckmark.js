import React, { useState } from 'react';
import './style.css'; // Import the CSS file for styling

const SuccessCheckMark = ({ show, onAnimationComplete }) => {
  const [animationVisible, setAnimationVisible] = useState(false);

  React.useEffect(() => {
    if (show) {
      setAnimationVisible(true);
      setTimeout(() => {
        setAnimationVisible(false);
        onAnimationComplete(); // Notify parent component that animation is complete
      }, 2000); // Adjust timing as needed for your animation duration
    }
  }, [show, onAnimationComplete]);

  return (
    <div className={`success-checkmark ${animationVisible ? 'show' : ''}`}>
      <div className="check-icon">
        <span className="icon-line line-tip"></span>
        <span className="icon-line line-long"></span>
        <div className="icon-circle"></div>
        <div className="icon-fix"></div>
      </div>
    </div>
  );
};

export default SuccessCheckMark;
