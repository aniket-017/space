import React from 'react';
import './Step2.css';

const Step2 = ({ nextStep, prevStep }) => {
  return (
    <fieldset>
      <div className="form-card">
        <div className="row">
          <div className="col-7">
            <h2 className="fs-title">Personal Information:</h2>
          </div>
          <div className="col-5">
            <h2 className="steps">Step 2 - 4</h2>
          </div>
        </div>
        <label className="fieldlabels">First Name: *</label>
        <input type="text" name="fname" placeholder="First Name" />
        <label className="fieldlabels">Last Name: *</label>
        <input type="text" name="lname" placeholder="Last Name" />
        <label className="fieldlabels">Contact No.: *</label>
        <input type="text" name="phno" placeholder="Contact No." />
        <label className="fieldlabels">Alternate Contact No.: *</label>
        <input type="text" name="phno_2" placeholder="Alternate Contact No." />
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

export default Step2;
