import React from 'react';
import '../style/TextAreaWithRestart.css';
import restart from "../assets/restart.png"

const TextAreaWithRestart = () => {
  const handleRestart = () => {
    // Logic to reset the typing test can be added here
    console.log("Restart clicked!");
  };

  return (
    <div className="text-area-container">
      <p className="typing-text">
          The quick brown fox jumps over the lazy dog. The dog was too smart 
          and her name was viola, after than she was trveling  {/* Replace with dynamic text */}
        .
      </p>
      <button className="restart-button" onClick={handleRestart}>
       <img src={restart} alt='restart' className='restart'/>
      </button>

      <div className='restart-alt'>
        Restart Test
      </div>
    </div>
  );
};

export default TextAreaWithRestart;
