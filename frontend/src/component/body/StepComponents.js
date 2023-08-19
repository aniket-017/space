import React, { useState } from "react";
import "./Step3.css";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // Make sure to import the styles
import "react-date-range/dist/theme/default.css"; // Optional theme styles
// ... Other imports ...


const Step1 = ({ data, handleChange }) => {
  return (
    <div>
      <h2>Step 1: Basic Information</h2>
     
      <div className="form-group">
      <h3>Venue Name</h3>
      <input
        type="text"
        name="basicInfo.venueName"
        placeholder="Venue Name"
        value={data.venueName}
        onChange={handleChange}
        required
      />
      </div>
      <div className="form-group">
      <h3>Venue Address</h3>
      <input
        type="text"
        name="basicInfo.venueAddress"
        placeholder="Venue Address"
        value={data.venueAddress}
        onChange={handleChange}
        required
      />
      </div>
      <div className="form-group">
      <h3>Photos And Videos</h3>
      <input
        type="file"
        name="basicInfo.photosVideos"
        onChange={handleChange}
        accept="image/*, video/*"
        multiple
      />
      </div>
      <div className="form-group">
      <h3>Venue Type</h3>
       <input
        type="text"
        name="basicInfo.venueType"
        placeholder="Venue Type"
        value={data.venueType}
        onChange={handleChange}
      />
      </div>
      <div className="form-group">
      <h3>Venue Owner</h3>
      <input
        type="text"
        name="basicInfo.venueOwner"
        placeholder="Venue Owner"
        value={data.venueOwner}
        onChange={handleChange}
      />
      </div>
     
    </div>
  );
};

const Step2 = ({ data, handleChange }) => {
  return (
    <div>
      <h2>Step 2: Location Information</h2>
   
      <div className="form-group">
      <h3>Total Area</h3>
      <input
        type="text"
        name="locationInfo.totalArea"
        placeholder="Total Area"
        value={data.totalArea}  // Update the path to access the correct nested property
        onChange={handleChange}
       
      />
      </div>
      <div className="form-group">
      <h3>Indoor Area</h3>
      <input
        type="text"
        name="locationInfo.indoorArea"
        placeholder="Indoor Area"
        value={data.indoorArea}
        onChange={handleChange}
      
      />
      </div>
      <div className="form-group">
      <h3>Outdoor Area</h3>
      <input
        type="text"
        name="locationInfo.outdoorArea"
        placeholder="Outdoor Area"
        value={data.outdoorArea}
        onChange={handleChange}
       
      />
      </div>
      <div className="form-group">
      <h3>Seating Capacity</h3>
      <input
        type="text"
        name="locationInfo.seatingCapacity"
        placeholder="Seating Capacity"
        value={data.seatingCapacity}
        onChange={handleChange}
    
      />
      </div>
      <div className="form-group">
      <h3>Standing Capacity</h3>
      <input
        type="text"
        name="locationInfo.standingCapacity"
        placeholder="Standing Capacity"
        value={data.standingCapacity}
        onChange={handleChange}
        
      />
      </div>
     
    </div>

  );
};



const Step3 = ({ data, handleChange }) => {
  return (
    <div>
      <h2>Step 3: Services and Amenities</h2>

      <div className="form-group">
    <h3>Catering Services</h3>
    <label className="custom-radio">
      <input
        type="radio"
        name="ServicesInfo.cateringServices"
        value="In-House"
        checked={data.cateringServices === "In-House"}
        onChange={handleChange}
      />
      In-House
    </label>
    <label className="custom-radio">
      <input
        type="radio"
        name="ServicesInfo.cateringServices"
        value="Outsourced"
        checked={data.cateringServices === "Outsourced"}
        onChange={handleChange}
      />
      Outsourced
    </label>
    <label className="custom-radio">
      <input
        type="radio"
        name="ServicesInfo.cateringServices"
        value="Both"
        checked={data.cateringServices === "Both"}
        onChange={handleChange}
      />
      Both
    </label>
    <label className="custom-radio">
      <input
        type="radio"
        name="ServicesInfo.cateringServices"
        value="None"
        checked={data.cateringServices === "None"}
        onChange={handleChange}
      />
      None
    </label>
  </div>

      <div className="form-group">
  <h3>Types of Cuisine</h3>
  <label className="custom-checkbox">
    <input
      type="checkbox"
      name="ServicesInfo.typesOfCuisine"
      value="Indian"
      checked={data.typesOfCuisine && data.typesOfCuisine.includes("Indian")}
      onChange={handleChange}
    />
    Indian
  </label>
  <label className="custom-checkbox">
    <input
      type="checkbox"
      name="ServicesInfo.typesOfCuisine"
      value="Chinese"
      checked={data.typesOfCuisine && data.typesOfCuisine.includes("Chinese")}
      onChange={handleChange}
    />
    Chinese
  </label>
  <label className="custom-checkbox">
    <input
      type="checkbox"
      name="ServicesInfo.typesOfCuisine"
      value="Italian"
      checked={data.typesOfCuisine && data.typesOfCuisine.includes("Italian")}
      onChange={handleChange}
    />
    Italian
  </label>
  <label className="custom-checkbox">
    <input
      type="checkbox"
      name="ServicesInfo.typesOfCuisine"
      value="Continental"
      checked={data.typesOfCuisine && data.typesOfCuisine.includes("Continental")}
      onChange={handleChange}
    />
    Continental
  </label>
  <label className="custom-checkbox">
    <input
      type="checkbox"
      name="ServicesInfo.typesOfCuisine"
      value="Vegan"
      checked={data.typesOfCuisine && data.typesOfCuisine.includes("Vegan")}
      onChange={handleChange}
    />
    Vegan
  </label>
  <label className="custom-checkbox">
    <input
      type="checkbox"
      name="ServicesInfo.typesOfCuisine"
      value="Gluten-Free"
      checked={data.typesOfCuisine && data.typesOfCuisine.includes("Gluten-Free")}
      onChange={handleChange}
    />
    Gluten-Free
  </label>
  <label className="custom-checkbox">
    <input
      type="checkbox"
      name="ServicesInfo.typesOfCuisine"
      value="Halal"
      checked={data.typesOfCuisine && data.typesOfCuisine.includes("Halal")}
      onChange={handleChange}
    />
    Halal
  </label>
  <label className="custom-checkbox">
    <input
      type="checkbox"
      name="ServicesInfo.typesOfCuisine"
      value="Kosher"
      checked={data.typesOfCuisine && data.typesOfCuisine.includes("Kosher")}
      onChange={handleChange}
    />
    Kosher
  </label>
  <label className="custom-checkbox">
    <input
      type="checkbox"
      name="ServicesInfo.typesOfCuisine"
      value="Other"
      checked={data.typesOfCuisine && data.typesOfCuisine.includes("Other")}
      onChange={handleChange}
    />
    Other
  </label>
</div>


<div className="form-group">
        <h3>Bar Services</h3>
        <label className="custom-radio">
          <input
            type="radio"
            name="ServicesInfo.barServices"
            value="Available"
            checked={data.barServices === "Available"}
            onChange={handleChange}
          />
          Available
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            name="ServicesInfo.barServices"
            value="Not Available"
            checked={data.barServices === "Not Available"}
            onChange={handleChange}
          />
          Not Available
        </label>
      </div>
      

      <div className="form-group">
        <h3>Alcohol Licensing</h3>
        <label className="custom-radio">
          <input
            type="radio"
            name="ServicesInfo.alcoholLicensing"
            value="Licensed"
            checked={data.alcoholLicensing === "Licensed"}
            onChange={handleChange}
          />
          Licensed
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            name="ServicesInfo.alcoholLicensing"
            value="Not Licensed"
            checked={data.alcoholLicensing === "Not Licensed"}
            onChange={handleChange}
          />
          Not Licensed
        </label>
      </div>

      <div className="form-group">
        <h3>Decor Services</h3>
        <label className="custom-radio">
          <input
            type="radio"
            name="ServicesInfo.decorServices"
            value="Available"
            checked={data.decorServices === "Available"}
            onChange={handleChange}
          />
          Available
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            name="ServicesInfo.decorServices"
            value="Not Available"
            checked={data.decorServices === "Not Available"}
            onChange={handleChange}
          />
          Not Available
        </label>
      </div>


      <div className="form-group">
        <h3>Event Planning Services</h3>
        <label className="custom-radio">
          <input
            type="radio"
            name="ServicesInfo.eventPlanningServices"
            value="Available"
            checked={data.eventPlanningServices === "Available"}
            onChange={handleChange}
          />
          Available
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            name="ServicesInfo.eventPlanningServices"
            value="Not Available"
            checked={data.eventPlanningServices === "Not Available"}
            onChange={handleChange}
          />
          Not Available
        </label>
      </div>

      {/* ... rest of the component ... */}
    </div>
  );
};








const Step4 = ({ data, handleChange, setDateRange }) => {

  const customStyles = {
    background: '#f0f0f0',
    border: 'black'
  
    // Add more custom styles here as needed
  };
  const [selectedDateRange, setSelectedDateRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const handleDateChange = (ranges) => {
    setSelectedDateRange(ranges.selection);
    // Call the callback to update the date range in Main.js
    setDateRange([ranges.selection]); // Wrap the range object in an array
  };


  return (
    <div>
      <h2>Step 4: Booking Information</h2>
      
      <div className="form-group">

     
 
      <h3> Availability (Date Range Picker):</h3>
       

     
        <DateRangePicker
         className='rdrDefinedRangesWrapper'
         style={customStyles} 
         onChange={handleDateChange} // Use the handleChange function from props
         ranges={[selectedDateRange]}// Use the availabilityDateRange state from props // Provide your handleDateChange function here
          staticRanges={[]}
          inputRanges={[]}
          showSelectionPreview={true}
          moveRangeOnFirstSelection={false}

        />
      
      </div>
     
     <div className="form-group">
     <label>
        Minimum Notice Period:
        <input
          type="text"
          name="BookingInfo.minimumNoticePeriod"
          value={data.minimumNoticePeriod}
          onChange={handleChange}
        />
      </label>
     </div>
      
      
      <div className="form-group">
      <label>
        Cancellation Policy:
        <textarea
          name="BookingInfo.cancellationPolicy"
          value={data.cancellationPolicy}
          onChange={handleChange}
        />
      </label>

      </div>

      
      <div className="form-group">
      <label>
        Pricing:
        <input
          type="text"
          name="BookingInfo.pricing"
          value={data.pricing}
          onChange={handleChange}
        />
      </label>
      </div>
      
      
      <div className="form-group">
        Payment Methods Accepted:
        <label className="custom-checkbox">
          <input
            type="checkbox"
            name="BookingInfo.paymentMethodsAccepted"
            value="Cash"
            checked={data.paymentMethodsAccepted && data.paymentMethodsAccepted.includes("Cash")}
            onChange={handleChange}
          />
          Cash
        </label>
        <label className="custom-checkbox">
          <input
            type="checkbox"
            name="BookingInfo.paymentMethodsAccepted"
            value="Credit Card"
            checked={data.paymentMethodsAccepted && data.paymentMethodsAccepted.includes("Credit Card")}
            onChange={handleChange}
          />
          Credit Cards
        </label>
        <label className="custom-checkbox">
          <input
            type="checkbox"
            name="BookingInfo.paymentMethodsAccepted"
            value="Debit Card"
            checked={data.paymentMethodsAccepted && data.paymentMethodsAccepted.includes("Debit Card")}
            onChange={handleChange}
          />
          Debit Card
        </label>
        <label className="custom-checkbox">
          <input
            type="checkbox"
            name="BookingInfo.paymentMethodsAccepted"
            value="Bank Transfer"
            checked={data.paymentMethodsAccepted && data.paymentMethodsAccepted.includes("Bank Transfer")}
            onChange={handleChange}
          />
          Bank Transfer
        </label>
        <label className="custom-checkbox">
          <input
            type="checkbox"
            name="BookingInfo.paymentMethodsAccepted"
            value="Mobile Payment"
            checked={data.paymentMethodsAccepted && data.paymentMethodsAccepted.includes("Mobile Payment")}
            onChange={handleChange}
          />
          Mobile Payment
        </label>
        <label className="custom-checkbox">
          <input
            type="checkbox"
            name="BookingInfo.paymentMethodsAccepted"
            value="Other"
            checked={data.paymentMethodsAccepted && data.paymentMethodsAccepted.includes("Other")}
            onChange={handleChange}
          />
          Other
        </label>
      </div>
      
      <label className="custom-checkbox">
        Insurance Requirements:
        <textarea
          name="BookingInfo.insuranceRequirements"
          value={data.insuranceRequirements}
          onChange={handleChange}
        />
      </label>
      
    </div>
  );
};




const Step5 = ({ data, handleChange }) => {

  return (
    <div>
      <h2>Step 5: Past Event Information</h2>
      
      {/* Types of Events Hosted */}
      
      <div className="form-group">
  <h3>Types of Events Hosted</h3>
  <label className="custom-checkbox">
    <input
      type="checkbox"
      name="PastEventInfo.typesOfEventsHosted"
      value="Weddings"
      checked={data.typesOfEventsHosted && data.typesOfEventsHosted.includes("Weddings")}
      onChange={handleChange}
    />
    Weddings
  </label>
  <label className="custom-checkbox">
    <input
      type="checkbox"
      name="PastEventInfo.typesOfEventsHosted"
      value="Corporate Events"
      checked={data.typesOfEventsHosted && data.typesOfEventsHosted.includes("Corporate Events")}
      onChange={handleChange}
    />
    Corporate Events
  </label>
  <label className="custom-checkbox">
    <input
      type="checkbox"
      name="PastEventInfo.typesOfEventsHosted"
      value="Concerts"
      checked={data.typesOfEventsHosted && data.typesOfEventsHosted.includes("Concerts")}
      onChange={handleChange}
    />
    Concerts
  </label>
  <label className="custom-checkbox">
    <input
      type="checkbox"
      name="PastEventInfo.typesOfEventsHosted"
      value="Exhibitions"
      checked={data.typesOfEventsHosted && data.typesOfEventsHosted.includes("Exhibitions")}
      onChange={handleChange}
    />
    Exhibitions
  </label>
  <label className="custom-checkbox">
    <input
      type="checkbox"
      name="PastEventInfo.typesOfEventsHosted"
      value="Private Parties"
      checked={data.typesOfEventsHosted && data.typesOfEventsHosted.includes("Private Parties")}
      onChange={handleChange}
    />
    Private Parties
  </label>
  <label className="custom-checkbox">
    <input
      type="checkbox"
      name="PastEventInfo.typesOfEventsHosted"
      value="Festivals"
      checked={data.typesOfEventsHosted && data.typesOfEventsHosted.includes("Festivals")}
      onChange={handleChange}
    />
    Festivals
  </label>
  <label className="custom-checkbox">
    <input
      type="checkbox"
      name="PastEventInfo.typesOfEventsHosted"
      value="Workshops"
      checked={data.typesOfEventsHosted && data.typesOfEventsHosted.includes("Workshops")}
      onChange={handleChange}
    />
    Workshops
  </label>
  <label className="custom-checkbox">
    <input
      type="checkbox"
      name="PastEventInfo.typesOfEventsHosted"
      value="Seminars"
      checked={data.typesOfEventsHosted && data.typesOfEventsHosted.includes("Seminars")}
      onChange={handleChange}
    />
    Seminars
  </label>
  <label className="custom-checkbox">
    <input
      type="checkbox"
      name="PastEventInfo.typesOfEventsHosted"
      value="Other"
      checked={data.typesOfEventsHosted && data.typesOfEventsHosted.includes("Other")}
      onChange={handleChange}
    />
    Other
  </label>
</div>



<div className="form-group">
      <h3>Client Testimonials and Reviews :</h3>
        <textarea
          name="PastEventInfo.clientTestimonialsAndReviews"
          value={data.clientTestimonialsAndReviews}
          onChange={handleChange}
        />
  
  </div>

  <div className="form-group">
      <h3>Photos and Videos from Past Events :</h3>
      <input
        type="file"
        name="PastEventInfo.photosAndVideosFromPastEvents"
        onChange={handleChange}
        accept="image/*, video/*"
        multiple
        required
      />
  
  </div>


  <div className="form-group">
      <h3>Number of Events Hosted :</h3>
      <input
        type="text"
        name="PastEventInfo.numberOfEventsHosted"
        placeholder=" "
        value={data.numberOfEventsHosted}
        onChange={handleChange}
        required
      />
  
  </div>

 
  <div className="form-group">
      <h3>Notable Events or Clients :</h3>
        <textarea
          name="PastEventInfo.notableEventsOrClients"
          value={data.notableEventsOrClients}
          onChange={handleChange}
        />
  
  </div>


  <div className="form-group">
      <h3>Client References :</h3>
        <textarea
          name="PastEventInfo.clientReferences"
          value={data.clientReferences}
          onChange={handleChange}
        />
  
  </div>


  </div>
      
     
      
     

  );
};




const Step6 = ({ data, handleChange }) => {
  return (
    <div>
      <h2>Step 6: Legal and Compliance Information</h2>
      <div className="form-group">
        <label htmlFor="LegalInfo[licensesAndPermits]">
          Licenses and Permits
        </label>
        <textarea
          id="LegalInfo[licensesAndPermits]"
          name="LegalInfo.licensesAndPermits"
          value={data.licensesAndPermits}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="LegalInfo[safetyMeasures]">Safety Measures</label>
        <textarea
          id="LegalInfo[safetyMeasures]"
          name="LegalInfo.safetyMeasures"
          value={data.safetyMeasures}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="LegalInfo[businessRegistrationDetails]">
          Business Registration Details
        </label>
        <textarea
          id="LegalInfo[businessRegistrationDetails]"
          name="LegalInfo.businessRegistrationDetails"
          value={data.businessRegistrationDetails}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <h3>Tax Compliance Status</h3>
        <label className="custom-radio">
          <input
            type="radio"
            name="LegalInfo.taxComplianceStatus"
            value="Compliant"
            checked={data.taxComplianceStatus === "Compliant"}
            onChange={handleChange}
          />
          Compliant
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            name="LegalInfo.taxComplianceStatus"
            value="Non-Compliant"
            checked={data.taxComplianceStatus === "Non-Compliant"}
            onChange={handleChange}
          />
          Non-Compliant
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="LegalInfo[healthAndSafetyCertifications]">
          Health and Safety Certifications
        </label>
        <textarea
          id="LegalInfo[healthAndSafetyCertifications]"
          name="LegalInfo.healthAndSafetyCertifications"
          value={data.healthAndSafetyCertifications}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <h3>Fire Safety Compliance</h3>
        <label className="custom-radio">
          <input
            type="radio"
            name="LegalInfo.fireSafetyCompliance"
            value="Compliant"
            checked={data.fireSafetyCompliance === "Compliant"}
            onChange={handleChange}
          />
          Compliant
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            name="LegalInfo.fireSafetyCompliance"
            value="Non-Compliant"
            checked={data.fireSafetyCompliance === "Non-Compliant"}
            onChange={handleChange}
          />
          Non-Compliant
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="LegalInfo[foodSafetyCertifications]">
          Food Safety Certifications (if applicable)
        </label>
        <textarea
          id="LegalInfo[foodSafetyCertifications]"
          name="LegalInfo.foodSafetyCertifications"
          value={data.foodSafetyCertifications}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};


const Step7 = ({ data, handleChange }) => {
  return (
    <div>
      <h2>Step 7: Environmental Impact</h2>
      
      {/* Environmental Impact - Sustainability Practices */}
      <div className="form-group">
        <h3>Sustainability Practices : </h3>
        <textarea
          id="sustainabilityPractices"
          name="EnvirInfo.sustainabilityPractices"
          value={data.sustainabilityPractices}
          onChange={handleChange}
        />
      </div>

      {/* Environmental Impact - Noise Pollution Controls */}
      <div className="form-group">
      <h3>Noise Pollution Controls : </h3>
        
        <textarea
          id="noisePollutionControls"
          name="EnvirInfo.noisePollutionControls"
          value={data.noisePollutionControls}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};





const Step8 = ({ data, handleChange }) => {
  return (
    <div>
      <h2>Step 8: Preferred Vendors</h2>

      <div className="form-group">
        <label htmlFor="preferredCateringVendor">Preferred Catering Vendor:</label>
        <select
          id="preferredCateringVendor"
          name="VendorsInfo.preferredCateringVendor"
          value={data.preferredCateringVendor}
          onChange={handleChange}
          required
        >
          <option value="">Select a vendor</option>
          <option value="Vendor 1">Vendor 1</option>
          <option value="Vendor 2">Vendor 2</option>
          <option value="Vendor 3">Vendor 3</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="preferredDesignAndDecorVendor">Preferred Design and Decor Vendor:</label>
        <select
          id="preferredDesignAndDecorVendor"
          name="VendorsInfo.preferredDesignAndDecorVendor"
          value={data.preferredDesignAndDecorVendor}
          onChange={handleChange}
        >
          <option value="">Select a vendor</option>
          <option value="Vendor 1">Vendor 1</option>
          <option value="Vendor 2">Vendor 2</option>
          <option value="Vendor 3">Vendor 3</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="preferredTravelVendor">Preferred Travel Vendor:</label>
        <select
          id="preferredTravelVendor"
          name="VendorsInfo.preferredTravelVendor"
          value={data.preferredTravelVendor}
          onChange={handleChange}
        >
          <option value="">Select a vendor</option>
          <option value="Vendor 1">Vendor 1</option>
          <option value="Vendor 2">Vendor 2</option>
          <option value="Vendor 3">Vendor 3</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="preferredBeautyVendor">Preferred Beauty Vendor:</label>
        <select
          id="preferredBeautyVendor"
          name="VendorsInfo.preferredBeautyVendor"
          value={data.preferredBeautyVendor}
          onChange={handleChange}
        >
          <option value="">Select a vendor</option>
          <option value="Vendor 1">Vendor 1</option>
          <option value="Vendor 2">Vendor 2</option>
          <option value="Vendor 3">Vendor 3</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="preferredPhotographyVendor">Preferred Photography Vendor:</label>
        <select
          id="preferredPhotographyVendor"
          name="VendorsInfo.preferredPhotographyVendor"
          value={data.preferredPhotographyVendor}
          onChange={handleChange}
        >
          <option value="">Select a vendor</option>
          <option value="Vendor 1">Vendor 1</option>
          <option value="Vendor 2">Vendor 2</option>
          <option value="Vendor 3">Vendor 3</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="preferredEventPlanningVendor">Preferred Event Planning Vendor:</label>
        <select
          id="preferredEventPlanningVendor"
          name="VendorsInfo.preferredEventPlanningVendor"
          value={data.preferredEventPlanningVendor}
          onChange={handleChange}
        >
          <option value="">Select a vendor</option>
          <option value="Vendor 1">Vendor 1</option>
          <option value="Vendor 2">Vendor 2</option>
          <option value="Vendor 3">Vendor 3</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="preferredAudioVisualEquipmentVendor">Preferred Audio/Visual Equipment Vendor:</label>
        <select
          id="preferredAudioVisualEquipmentVendor"
          name="VendorsInfo.preferredAudioVisualEquipmentVendor"
          value={data.preferredAudioVisualEquipmentVendor}
          onChange={handleChange}
        >
          <option value="">Select a vendor</option>
          <option value="Vendor 1">Vendor 1</option>
          <option value="Vendor 2">Vendor 2</option>
          <option value="Vendor 3">Vendor 3</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="preferredEntertainmentVendor">Preferred Entertainment Vendor:</label>
        <select
          id="preferredEntertainmentVendor"
          name="VendorsInfo.preferredEntertainmentVendor"
          value={data.preferredEntertainmentVendor}
          onChange={handleChange}
        >
          <option value="">Select a vendor</option>
          <option value="Vendor 1">Vendor 1</option>
          <option value="Vendor 2">Vendor 2</option>
          <option value="Vendor 3">Vendor 3</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="preferredAccommodationVendor">Preferred Accommodation Vendor:</label>
        <select
          id="preferredAccommodationVendor"
          name="VendorsInfo.preferredAccommodationVendor"
          value={data.preferredAccommodationVendor}
          onChange={handleChange}
        >
          <option value="">Select a vendor</option>
          <option value="Vendor 1">Vendor 1</option>
          <option value="Vendor 2">Vendor 2</option>
          <option value="Vendor 3">Vendor 3</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="preferredPrintingAndSignageVendor">Preferred Printing and Signage Vendor:</label>
        <select
          id="preferredPrintingAndSignageVendor"
          name="VendorsInfo.preferredPrintingAndSignageVendor"
          value={data.preferredPrintingAndSignageVendor}
          onChange={handleChange}
        >
          <option value="">Select a vendor</option>
          <option value="Vendor 1">Vendor 1</option>
          <option value="Vendor 2">Vendor 2</option>
          <option value="Vendor 3">Vendor 3</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="preferredSecurityServicesVendor">Preferred Security Services Vendor:</label>
        <select
          id="preferredSecurityServicesVendor"
          name="VendorsInfo.preferredSecurityServicesVendor"
          value={data.preferredSecurityServicesVendor}
          onChange={handleChange}
        >
          <option value="">Select a vendor</option>
          <option value="Vendor 1">Vendor 1</option>
          <option value="Vendor 2">Vendor 2</option>
          <option value="Vendor 3">Vendor 3</option>
        </select>
      </div>
    </div>
  );
};






const Step9 = ({ data, handleChange }) => {
  return (
    <div>
      <h2>Step 9: Demographic and Market Data</h2>
      <div className="form-group">
        <label htmlFor="targetAudience">Target Audience:</label>
        <textarea
          id="targetAudience"
          name="DemographicInfo.targetAudience"
          value={data.targetAudience}
          onChange={handleChange}
          placeholder=" "
        />
      </div>
      <div className="form-group">
        <label htmlFor="competitiveLandscape">Competitive Landscape:</label>
        <textarea
          id="competitiveLandscape"
          name="DemographicInfo.competitiveLandscape"
          value={data.competitiveLandscape}
          onChange={handleChange}
          placeholder=" "
        />
      </div>
    </div>
  );
};



const Step10 = ({ formData, handleSubmit }) => {
  const { basicInfo, locationInfo } = formData;
  return (
    <div>
      <h2>Step 10: Verification and Final Submit</h2>
      <h3>Basic Information</h3>
      <p>Venue Name: {basicInfo.venueName}</p>
      <p>Venue Address: {basicInfo.venueAddress}</p>
      <p>Venue Address: {basicInfo.venueAddress}</p>
      <div>
        <p>Images and Videos:</p>
        {basicInfo.photosVideos.map((item, index) => (
          <div key={index}>
            {item.name} {/* Display the filename */}
          </div>
        ))}
      </div>
      <p>Venue Address: {basicInfo.venueType}</p>
      <p>Venue Address: {basicInfo.venueOwner}</p>
      <h3>Location Information</h3>
      <p>Verify the information and submit the form.</p>
      
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export {
  Step1,
  Step2,
  Step3,
  Step4,
  Step5,
  Step6,
  Step7,
  Step8,
  Step9,
  Step10,
};
