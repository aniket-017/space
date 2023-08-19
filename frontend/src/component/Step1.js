import React, { useState } from 'react';
import './Step1.css';

const Step1 = ({ nextStep }) => {
  const [formData, setFormData] = useState({
    email: '',
    uname: '',
    pwd: '',
    cpwd: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Define the form fields data
  const formFields = [
  {
    section: 'Basic Information',
    fieldName: 'Venue Name',
    type: 'text',
    name: 'venueName',
    placeholder: 'Venue Name',
    options: 'N/A',
  },
  {
    section: 'Basic Information',
    fieldName: 'Venue Address',
    type: 'textarea',
    name: 'venueAddress',
    placeholder: 'Venue Address',
    options: 'N/A',
  },
  {
    section: 'Basic Information',
    fieldName: 'Contact Information',
    type: 'text',
    name: 'contactInfo',
    placeholder: 'Contact Information',
    options: 'N/A',
  },
  {
    section: 'Basic Information',
    fieldName: 'Venue Type',
    type: 'dropdown',
    name: 'venueType',
    placeholder: 'Select Venue Type',
    options:
      'Conference Centre, Hotel, Outdoor Space, Banquet Hall, Stadium, Auditorium, Restaurant, Museum',
  },
  {
    section: 'Basic Information',
    fieldName: 'Venue Owner/Manager Information',
    type: 'text',
    name: 'ownerManagerInfo',
    placeholder: 'Venue Owner/Manager Information',
    options: 'N/A',
  },
  {
    section: 'Basic Information',
    fieldName: 'Venue Description',
    type: 'textarea',
    name: 'venueDescription',
    placeholder: 'Venue Description',
    options: 'N/A',
  },
  {
    section: 'Basic Information',
    fieldName: 'Venue Category',
    type: 'checkbox',
    name: 'venueCategory',
    placeholder: 'Select Venue Category',
    options:
      'Weddings, Corporate Events, Concerts, Exhibitions, Private Parties, Festivals, Workshops, Seminars',
  },
  {
    section: 'Basic Information',
    fieldName: 'Social Media Handles',
    type: 'text',
    name: 'socialMediaHandles',
    placeholder: 'Social Media Handles',
    options: 'N/A',
  },
  {
    section: 'Basic Information',
    fieldName: 'Operating Hours',
    type: 'time',
    name: 'operatingHours',
    placeholder: 'Operating Hours',
    options: 'N/A',
  },
  {
    section: 'Basic Information',
    fieldName: 'Languages Spoken',
    type: 'checkbox',
    name: 'languagesSpoken',
    placeholder: 'Select Languages Spoken',
    options:
      'English, Hindi, Marathi, Gujarati, Bengali, Tamil, Telugu, Kannada, Malayalam, Punjabi',
  },
  {
    section: 'Basic Information',
    fieldName: 'Affiliations or Partnerships',
    type: 'textarea',
    name: 'affiliationsPartnerships',
    placeholder: 'Affiliations or Partnerships',
    options: 'N/A',
  },
  {
    section: 'Basic Information',
    fieldName: 'Awards and Recognitions',
    type: 'textarea',
    name: 'awardsRecognitions',
    placeholder: 'Awards and Recognitions',
    options: 'N/A',
  },
  {
    section: 'Basic Information',
    fieldName: 'Nearest Landmarks',
    type: 'textarea',
    name: 'nearestLandmarks',
    placeholder: 'Nearest Landmarks',
    options: 'N/A',
  },
  {
    section: 'Basic Information',
    fieldName: 'Public Transport Accessibility',
    type: 'textarea',
    name: 'publicTransportAccessibility',
    placeholder: 'Public Transport Accessibility',
    options: 'N/A',
  },
  {
    section: 'Basic Information',
    fieldName: 'Emergency Services',
    type: 'textarea',
    name: 'emergencyServices',
    placeholder: 'Emergency Services',
    options: 'N/A',
  },
  {
    section: 'Basic Information',
    fieldName: 'Photos and Videos',
    type: 'file',
    name: 'photosVideos',
    placeholder: 'Upload Photos and Videos',
    options: 'N/A',
  },
  {
    section: 'Basic Information',
    fieldName: 'Logo',
    type: 'file',
    name: 'logo',
    placeholder: 'Upload Logo',
    options: 'N/A',
  },
  {
    section: 'Basic Information',
    fieldName: 'Year of Establishment',
    type: 'date',
    name: 'yearEstablishment',
    placeholder: 'Year of Establishment',
    options: 'N/A',
  },
  {
    section: 'Basic Information',
    fieldName: 'Ownership Type',
    type: 'radio',
    name: 'ownershipType',
    placeholder: 'Select Ownership Type',
    options: 'Privately Owned, Chain, Government-Owned',
  },
  {
    section: 'Basic Information',
    fieldName: 'Unique Identifier',
    type: 'text',
    name: 'uniqueIdentifier',
    placeholder: 'Unique Identifier',
    options: 'N/A',
  },
];


  return (
    <fieldset>
      <div className="form-card">
        <div className="row">
          <div className="col-7">
            <h2 className="fs-title">Account Information:</h2>
          </div>
          <div className="col-5">
            <h2 className="steps">Step 1 - 10</h2>
          </div>
        </div>
        {/* Render the form fields */}
        {formFields.map((field, index) => (
          <div key={index}>
            <label className="fieldlabels">
         {field.fieldName}
            </label>
            {field.type === 'text' && (
              <input
                type="text"
                name={field.name}
                placeholder={field.placeholder}
                value={formData[field.name]}
                onChange={handleChange}
              />
            )}
            {field.type === 'textarea' && (
              <textarea
                name={field.name}
                placeholder={field.placeholder}
                value={formData[field.name]}
                onChange={handleChange}
              />
            )}
            {/* If there are options, create a dropdown or checkbox group */}
            {field.options !== 'N/A' && (
              <select
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
              >
                <option value="">Select an option</option>
                {field.options.split(', ').map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            )}
          </div>
        ))}
      </div>
      <input
        type="button"
        name="next"
        className="next action-button"
        value="Next"
        onClick={nextStep}
      />
    </fieldset>
  );
};

export default Step1;
