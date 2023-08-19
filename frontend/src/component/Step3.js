import React from 'react';
import './Step3.css';

const Step3 = ({ nextStep, prevStep }) => {
  return (
    <fieldset>
      <div className="form-card">
        {/* Content of Step 3 */}
      </div>
      <input
        type="button"
        name="next"
        className="next action-button"
        value="Next"
        onClick={nextStep}
      />
      <input
        type="button"
        name="previous"
        className="previous action-button-previous"
        value="Previous"
        onClick={prevStep}
      />
    </fieldset>
  );
};

export default Step3;
