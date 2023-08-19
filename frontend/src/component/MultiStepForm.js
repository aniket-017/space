import React, { useState } from 'react';
import './MultiStepForm.css';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5.js';
import Step6 from './Step6.js';
import Step7 from './Step7.js';
import Step8 from './Step8.js';
import Step9 from './Step9.js';
import Step10 from './Step10.js';

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    uname: '',
    pwd: '',
    cpwd: '',
    // Add other form fields for each step here
  });

  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const setProgressBar = (curStep) => {
    const percent = parseFloat((100 / 10) * curStep).toFixed();
    return percent + '%';
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // Handle form submission here with the final form data
    console.log('Form Data:', formData);
    // Perform form submission actions here
  };

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-11 col-sm-10 col-md-10 col-lg-6 col-xl-5 text-center p-0 mt-3 mb-2">
          <div className="card px-0 pt-4 pb-0 mt-3 mb-3">
            <h2 id="heading">Venue Form</h2>
            <p>Fill all form fields to proceed</p>
            <form id="msform">
              <ul id="progressbar">
                <li className={currentStep === 1 ? 'active' : ''}>
                  <strong>Basic Information</strong>
                </li>
                <li className={currentStep === 2 ? 'active' : ''}>
                  <strong>Location Features</strong>
                </li>
                <li className={currentStep === 3 ? 'active' : ''}>
                  <strong>Service and Amenities</strong>
                </li>
                <li className={currentStep === 4 ? 'active' : ''}>
                  <strong>Booking information</strong>
                </li>
                <li className={currentStep === 5 ? 'active' : ''}>
                  <strong>Past Event information</strong>
                </li>
                <li className={currentStep === 6 ? 'active' : ''}>
                  <strong>Legal and Compliance information</strong>
                </li>
                <li className={currentStep === 7 ? 'active' : ''}>
                  <strong>Environmental Impact</strong>
                </li>
                <li className={currentStep === 8 ? 'active' : ''}>
                  <strong>Preferred Vendors</strong>
                </li>

                <li className={currentStep === 9 ? 'active' : ''}>
                  <strong>Demographic and Market Data</strong>
                </li>
                <li className={currentStep === 10 ? 'active' : ''}>
                  <strong>Review</strong>
                </li>
              </ul>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: setProgressBar(currentStep) }}
                ></div>
              </div>
              <br />
              {/* fieldsets */}
              {/* Render form fieldsets based on the current step */}
              {currentStep === 1 && <Step1 nextStep={nextStep} handleChange={handleChange} />}
              {currentStep === 2 && <Step2 nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} />}
              {currentStep === 3 && <Step3 nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} />}
              {currentStep === 4 && <Step4 nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} />}
              {/* Add other steps */}
              {currentStep === 5 && <Step5 nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} />}
              {currentStep === 6 && <Step6 nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} />}
              {currentStep === 7 && <Step7 nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} />}
              {currentStep === 8 && <Step8 nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} />}
              {currentStep === 9 && <Step9 nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} />}
              {currentStep === 10 && <Step10 prevStep={prevStep} handleSubmit={handleSubmit} formData={formData} />}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;
