// src/components/OptionsBox.jsx
import React from 'react';
import '../style/Options.css';
import time from "../assets/clock.png" 
import a from "../assets/a.png"
import zen from "../assets/zen.png"
import quote from "../assets/quote.png"
import tools from "../assets/tools.png"

const Options = () => {
  return (
    <div className="options-box">
      {/* First Part */}
      <div className="options-section">
        <div className="option-item">@ punctuation</div>
        <div className="option-item"># numbers</div>
      </div>

      {/* Vertical Divider */}
      <div className="vertical-line"></div>

      {/* Second Part */}
      <div className="options-section">
        <div className="option-item">
          <img src={time} className="option-icons" alt='time'></img> Time
        </div>
        <div className="option-item">
          <img src={a} className="option-icons" alt='A'></img> words</div>
        <div className="option-item">
          <img src={quote} className="option-icons" alt='quote'></img> Quote
        </div>
        <div className="option-item">
          <img src={zen} className="option-icons" alt='zen'></img> Zen
        </div>
        <div className="option-item">
          <img src={tools} className="option-icons" alt='tools'></img> Custom
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
