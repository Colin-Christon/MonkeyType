import React from 'react';
import '../style/TextAreaWithRestart.css';

const TextAreaWithRestart = () => {
  const handleRestart = () => {
    // Logic to reset the typing test can be added here
    console.log("Restart clicked!");
  };

  return (
    <div className="text-area-container">
      <div className="text-display">
        {/* This is where the text to type will be displayed */}
        <p className="typing-text">
          The quick brown fox jumps over the lazy dog. {/* Replace with dynamic text */}
        </p>
      </div>
      <button className="restart-button" onClick={handleRestart}>
        Restart
      </button>
    </div>
  );
};

export default TextAreaWithRestart;
