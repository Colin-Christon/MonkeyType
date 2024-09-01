// src/components/OptionsBox.jsx
import React from 'react';
import '../style/Options.css'; // CSS for styling

const Options = () => {
  return (
    <div className="options-box">
      {/* First Part */}
      <div className="options-section">
        <div className="option-item">@punctuation</div>
        <div className="option-item"># numbers</div>
      </div>

      {/* Vertical Divider */}
      <div className="vertical-line"></div>

      {/* Second Part */}
      <div className="options-section">
        <div className="option-item">
          <i className="clock-icon"></i> Time
        </div>
        <div className="option-item">A words</div>
        <div className="option-item">
          <i className="quote-icon"></i> Quote
        </div>
        <div className="option-item">
          <i className="zen-icon"></i> Zen
        </div>
        <div className="option-item">
          <i className="custom-icon"></i> Custom
        </div>
      </div>

      {/* Vertical Divider */}
      <div className="vertical-line"></div>

      {/* Third Part */}
      <div className="options-section">
        <div className="option-item">15</div>
        <div className="option-item">30</div>
        <div className="option-item">60</div>
        <div className="option-item">120</div>
      </div>
    </div>
  );
};

export default Options;
