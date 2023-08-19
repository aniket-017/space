import React, { useState } from "react";
import "./Main.css";
import { useDispatch, useSelector } from "react-redux";
import { createVenue } from "../../actions/venueActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward,faHouse,faCircleInfo,faLocationDot,faScrewdriverWrench,faCashRegister,faClockRotateLeft,faGavel,faTree,faTruckField,faUsers,faFileContract } from "@fortawesome/free-solid-svg-icons";

import {
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
} from "./StepComponents";

const Main = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.venue);
  const { user } = useSelector((state) => state.user);

  
  const [step, setStep] = useState(1);
  const [submissionStatus, setSubmissionStatus] = useState(null);
  // Basic Information State
  const [venueName, setVenueName] = useState("");
  const [venueAddress, setVenueAddress] = useState("");
  const [photosVideos, setPhotosVideos] = useState([]);
  const [venueType, setVenueType] = useState("");
  const [venueOwner, setVenueOwner] = useState("");

  // Location Information State
  const [totalArea, setTotalArea] = useState("");
  const [indoorArea, setIndoorArea] = useState("");
  const [outdoorArea, setOutdoorArea] = useState("");
  const [seatingCapacity, setSeatingCapacity] = useState("");
  const [standingCapacity, setStandingCapacity] = useState("");

  // Service Information State
  const [cateringServices, setCateringServices] = useState(""); // "In-House", "Outsourced", "Both", "None"
  const [typesOfCuisine, setTypesOfCuisine] = useState([]);
  const [barServices, setBarServices] = useState(""); // "Available" or "Not Available"
  const [alcoholLicensing, setAlcoholLicensing] = useState(""); // "Licensed" or "Not Licensed"
  const [decorServices, setDecorServices] = useState(""); // "Available" or "Not Available"
  const [eventPlanningServices, setEventPlanningServices] = useState(""); // "Available" or "Not Available"

  //Booking Information State
  const [availabilityDateRange, setAvailabilityDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [minimumNoticePeriod, setMinimumNoticePeriod] = useState("");
  const [cancellationPolicy, setCancellationPolicy] = useState("");
  const [pricing, setPricing] = useState("");
  const [paymentMethodsAccepted, setPaymentMethodsAccepted] = useState([]);
  const [insuranceRequirements, setInsuranceRequirements] = useState("");

  //Past Event Information
  const [typesOfEventsHosted, setTypesOfEventsHosted] = useState([]); // Array of selected types
  const [clientTestimonialsAndReviews, setClientTestimonialsAndReviews] =
    useState("");
  const [photosAndVideosFromPastEvents, setPhotosAndVideosFromPastEvents] =
    useState([]);
  const [numberOfEventsHosted, setNumberOfEventsHosted] = useState("");
  const [notableEventsOrClients, setNotableEventsOrClients] = useState("");
  const [clientReferences, setClientReferences] = useState("");

  //Legal and Compliance Information
  const [licensesAndPermits, setLicensesAndPermits] = useState("");
  const [safetyMeasures, setSafetyMeasures] = useState("");
  const [businessRegistrationDetails, setBusinessRegistrationDetails] =
    useState("");
  const [taxComplianceStatus, setTaxComplianceStatus] = useState("");
  const [healthAndSafetyCertifications, setHealthAndSafetyCertifications] =
    useState("");
  const [fireSafetyCompliance, setFireSafetyCompliance] = useState("");

  // Environmental Impact
  const [sustainabilityPractices, setSustainabilityPractices] = useState("");
  const [noisePollutionControls, setNoisePollutionControls] = useState("");

  // Step 8: Preferred Vendors
  const [preferredCateringVendor, setPreferredCateringVendor] = useState("");
  const [preferredDesignAndDecorVendor, setPreferredDesignAndDecorVendor] =
    useState("");
  const [preferredTravelVendor, setPreferredTravelVendor] = useState("");
  const [preferredBeautyVendor, setPreferredBeautyVendor] = useState("");
  const [preferredPhotographyVendor, setPreferredPhotographyVendor] =
    useState("");
  const [preferredEventPlanningVendor, setPreferredEventPlanningVendor] =
    useState("");
  const [
    preferredAudioVisualEquipmentVendor,
    setPreferredAudioVisualEquipmentVendor,
  ] = useState("");
  const [preferredEntertainmentVendor, setPreferredEntertainmentVendor] =
    useState("");
  const [preferredAccommodationVendor, setPreferredAccommodationVendor] =
    useState("");
  const [
    preferredPrintingAndSignageVendor,
    setPreferredPrintingAndSignageVendor,
  ] = useState("");
  const [preferredSecurityServicesVendor, setPreferredSecurityServicesVendor] =
    useState("");

  // Step 9: Demographic and Market Dat
  const [targetAudience, setTargetAudience] = useState("");
  const [competitiveLandscape, setCompetitiveLandscape] = useState("");

  // Define formData here
  const formData = {
    basicInfo: {
      venueName,
      venueAddress,
      photosVideos,
      venueType,
      venueOwner,
    },
    locationInfo: {
      totalArea,
      indoorArea,
      outdoorArea,
      seatingCapacity,
      standingCapacity,
    },
    ServicesInfo: {
      cateringServices,
      typesOfCuisine,
      barServices,
      alcoholLicensing,
      decorServices,
      eventPlanningServices,
    },
    BookingInfo: {
      availability: availabilityDateRange.map((range) => ({
        startDate: range.startDate.toISOString(),
        endDate: range.endDate.toISOString(),
      })),
      minimumNoticePeriod,
      cancellationPolicy,
      pricing,
      paymentMethodsAccepted,
      insuranceRequirements,
    },

    PastEventInfo: {
      typesOfEventsHosted,
      clientTestimonialsAndReviews,
      photosAndVideosFromPastEvents,
      numberOfEventsHosted,
      notableEventsOrClients,
      clientReferences,
    },
    LegalInfo: {
      licensesAndPermits,
      safetyMeasures,
      businessRegistrationDetails,
      taxComplianceStatus,
      healthAndSafetyCertifications,
      fireSafetyCompliance,
    },
    EnvirInfo: {
      sustainabilityPractices,
      noisePollutionControls,
    },
    VendorsInfo: {
      preferredCateringVendor,
      preferredDesignAndDecorVendor,
      preferredTravelVendor,
      preferredBeautyVendor,
      preferredPhotographyVendor,
      preferredEventPlanningVendor,
      preferredAudioVisualEquipmentVendor,
      preferredEntertainmentVendor,
      preferredAccommodationVendor,
      preferredPrintingAndSignageVendor,
      preferredSecurityServicesVendor,
    },
    DemographicInfo: {
      targetAudience,
      competitiveLandscape,
    },
  };

  const handleDateRangeChange = (newDateRange) => {
    console.log(newDateRange);
    setAvailabilityDateRange(newDateRange);
  };

  const handleChange = (event) => {
    const { name, value, type } = event.target;

    if (type === "radio") {
      // Handle radio buttons
      if (name === "ServicesInfo.cateringServices") {
        setCateringServices(value);
      } else if (name === "ServicesInfo.barServices") {
        setBarServices(value);
      } else if (name === "ServicesInfo.alcoholLicensing") {
        setAlcoholLicensing(value);
      } else if (name === "ServicesInfo.decorServices") {
        setDecorServices(value);
      } else if (name === "ServicesInfo.eventPlanningServices") {
        setEventPlanningServices(value);
        // Handle other radio button changes here
      } else if (name === "LegalInfo.taxComplianceStatus") {
        setTaxComplianceStatus(value);
      } else if (name === "LegalInfo.fireSafetyCompliance") {
        setFireSafetyCompliance(value);
      }
    } else if (type === "file") {
      const files = Array.from(event.target.files);
      // Check if the input field is for photosAndVideosFromPastEvents
      if (name === "PastEventInfo.photosAndVideosFromPastEvents") {
        setPhotosAndVideosFromPastEvents(files);
      } else {
        setPhotosVideos(files);
      }
    } else {
      const [section, field] = name.split("."); // Split the name into section and field

      if (section === "basicInfo") {
        switch (field) {
          case "venueName":
            setVenueName(value);
            break;
          case "venueAddress":
            setVenueAddress(value);
            break;
          case "venueType":
            setVenueType(value);
            break;
          case "venueOwner":
            setVenueOwner(value);
            break;
          default:
            break;
        }
      } else if (section === "locationInfo") {
        switch (field) {
          case "totalArea":
            setTotalArea(value);
            break;
          case "indoorArea":
            setIndoorArea(value);
            break;
          case "outdoorArea":
            setOutdoorArea(value);
            break;
          case "seatingCapacity":
            setSeatingCapacity(value);
            break;
          case "standingCapacity":
            setStandingCapacity(value);
            break;
          default:
            break;
        }
      } else if (section === "ServicesInfo") {
        switch (field) {
          case "typesOfCuisine":
            const selectedCuisine = value;
            const updatedCuisines = typesOfCuisine.includes(selectedCuisine)
              ? typesOfCuisine.filter((cuisine) => cuisine !== selectedCuisine)
              : [...typesOfCuisine, selectedCuisine];
            setTypesOfCuisine(updatedCuisines);
            break;
          case "cateringServices":
            setCateringServices(value);
            break;
          case "barServices":
            setBarServices(value);
            break;
          case "alcoholLicensing":
            setAlcoholLicensing(value);
            break;
          case "decorServices":
            setDecorServices(value);
            break;
          case "eventPlanningServices":
            setEventPlanningServices(value);
            break;
          // ... handle other service fields ...
          default:
            break;
        }
      } else if (section === "BookingInfo") {
        // Handle BookingInfo fields
        switch (field) {
          case "availability":
            const [start, end] = value.split(" to ");
            const startDate = new Date(start);
            const endDate = new Date(end);
            setAvailabilityDateRange([
              { startDate, endDate, key: "selection" },
            ]);
            break;
          case "minimumNoticePeriod":
            setMinimumNoticePeriod(value);
            break;
          case "cancellationPolicy":
            setCancellationPolicy(value);
            break;
          case "pricing":
            setPricing(value);
            break;
          case "paymentMethodsAccepted":
            const selectedMethod = value;
            const updatedPaymentMethods = paymentMethodsAccepted.includes(
              selectedMethod
            )
              ? paymentMethodsAccepted.filter(
                  (method) => method !== selectedMethod
                )
              : [...paymentMethodsAccepted, selectedMethod];
            setPaymentMethodsAccepted(updatedPaymentMethods);
            break;
          case "insuranceRequirements":
            setInsuranceRequirements(value);
            break;
          // ... handle other BookingInfo fields ...
          default:
            break;
        }
      } else if (section === "PastEventInfo") {
        // Handle PastEventInfo fields
        switch (field) {
          case "typesOfEventsHosted":
            const selectedEventType = value;
            const updatedEventTypes = typesOfEventsHosted.includes(
              selectedEventType
            )
              ? typesOfEventsHosted.filter(
                  (eventType) => eventType !== selectedEventType
                )
              : [...typesOfEventsHosted, selectedEventType];
            setTypesOfEventsHosted(updatedEventTypes);
            break;
          case "clientTestimonialsAndReviews":
            setClientTestimonialsAndReviews(value);
            break;
          case "numberOfEventsHosted":
            setNumberOfEventsHosted(value);
            break;
          case "notableEventsOrClients":
            setNotableEventsOrClients(value);
            break;
          case "clientReferences":
            setClientReferences(value);
            break;
          // ... handle other PastEventInfo fields ...
          default:
            break;
        }
      } else if (section === "LegalInfo") {
        switch (field) {
          case "licensesAndPermits":
            setLicensesAndPermits(value);
            break;
          case "safetyMeasures":
            setSafetyMeasures(value);
            break;
          case "businessRegistrationDetails":
            setBusinessRegistrationDetails(value);
            break;
          case "taxComplianceStatus":
            setTaxComplianceStatus(value);
            break;
          case "healthAndSafetyCertifications":
            setHealthAndSafetyCertifications(value);
            break;
          case "fireSafetyCompliance":
            setFireSafetyCompliance(value);
            break;
          // ... handle other LegalInfo fields ...
          default:
            break;
        }
      } else if (section === "EnvirInfo") {
        switch (field) {
          case "sustainabilityPractices":
            setSustainabilityPractices(value);
            break;
          case "noisePollutionControls":
            setNoisePollutionControls(value);
            break;
          // ... handle other EnvirInfo fields ...
          default:
            break;
        }
      } else if (section === "VendorsInfo") {
        // Handle VendorsInfo fields
        switch (field) {
          case "preferredCateringVendor":
            setPreferredCateringVendor(value);
            break;
          case "preferredDesignAndDecorVendor":
            setPreferredDesignAndDecorVendor(value);
            break;
          case "preferredTravelVendor":
            setPreferredTravelVendor(value);
            break;
          case "preferredBeautyVendor":
            setPreferredBeautyVendor(value);
            break;
          case "preferredPhotographyVendor":
            setPreferredPhotographyVendor(value);
            break;
          case "preferredEventPlanningVendor":
            setPreferredEventPlanningVendor(value);
            break;
          case "preferredAudioVisualEquipmentVendor":
            setPreferredAudioVisualEquipmentVendor(value);
            break;
          case "preferredEntertainmentVendor":
            setPreferredEntertainmentVendor(value);
            break;
          case "preferredAccommodationVendor":
            setPreferredAccommodationVendor(value);
            break;
          case "preferredPrintingAndSignageVendor":
            setPreferredPrintingAndSignageVendor(value);
            break;
          case "preferredSecurityServicesVendor":
            setPreferredSecurityServicesVendor(value);
            break;
          // ... handle other VendorsInfo fields ...
          default:
            break;
        }
      }else if (section === "DemographicInfo") {
        switch (field) {
          case "targetAudience":
            setTargetAudience(value);
            break;
          case "competitiveLandscape":
            setCompetitiveLandscape(value);
            break;
          // ... Handle other DemographicInfo fields ...
          default:
            break;
        }
      }
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Create a FormData object
    try {
    const formDataObject = new FormData();

    formDataObject.set("basicInfo[venueName]", venueName);
    formDataObject.set("basicInfo[venueAddress]", venueAddress);

    // Append each photosVideos file separately
    for (let i = 0; i < photosVideos.length; i++) {
      console.log("p :", photosVideos[i].files);
      formDataObject.append("basicInfo[photosVideos]", photosVideos[i]);
    }

    formDataObject.set("basicInfo[venueType]", venueType);
    formDataObject.set("basicInfo[venueOwner]", venueOwner);

    formDataObject.set("locationInfo[totalArea]", totalArea);
    formDataObject.set("locationInfo[indoorArea]", indoorArea);
    formDataObject.set("locationInfo[outdoorArea]", outdoorArea);
    formDataObject.set("locationInfo[seatingCapacity]", seatingCapacity);
    formDataObject.set("locationInfo[standingCapacity]", standingCapacity);

    formDataObject.set("ServicesInfo[cateringServices]", cateringServices);
    formDataObject.set(
      "ServicesInfo[typesOfCuisine]",
      typesOfCuisine.join(",")
    );
    formDataObject.set("ServicesInfo[barServices]", barServices);
    formDataObject.set("ServicesInfo[alcoholLicensing]", alcoholLicensing);
    formDataObject.set("ServicesInfo[decorServices]", decorServices);
    formDataObject.set(
      "ServicesInfo[eventPlanningServices]",
      eventPlanningServices
    );

    // Adding BookingInfo fields
    formDataObject.set(
      "BookingInfo[availability]",
      availabilityDateRange[0].startDate.toISOString() +
        " to " +
        availabilityDateRange[0].endDate.toISOString()
    );
    formDataObject.set("BookingInfo[minimumNoticePeriod]", minimumNoticePeriod);
    formDataObject.set("BookingInfo[cancellationPolicy]", cancellationPolicy);
    formDataObject.set("BookingInfo[pricing]", pricing);
    formDataObject.set(
      "BookingInfo[paymentMethodsAccepted]",
      paymentMethodsAccepted.join(",")
    );
    formDataObject.set(
      "BookingInfo[insuranceRequirements]",
      insuranceRequirements
    );

    // Append PastEventInfo fields
    formDataObject.set(
      "PastEventInfo[typesOfEventsHosted]",
      typesOfEventsHosted.join(",")
    );
    formDataObject.set(
      "PastEventInfo[clientTestimonialsAndReviews]",
      clientTestimonialsAndReviews
    );

    // Append each photosAndVideosFromPastEvents file separately
    for (let i = 0; i < photosAndVideosFromPastEvents.length; i++) {
      formDataObject.append(
        "PastEventInfo[photosAndVideosFromPastEvents]",
        photosAndVideosFromPastEvents[i]
      );
    }

    formDataObject.set(
      "PastEventInfo[numberOfEventsHosted]",
      numberOfEventsHosted
    );
    formDataObject.set(
      "PastEventInfo[notableEventsOrClients]",
      notableEventsOrClients
    );
    formDataObject.set("PastEventInfo[clientReferences]", clientReferences);

    // Append LegalInfo fields
    formDataObject.set("LegalInfo[licensesAndPermits]", licensesAndPermits);
    formDataObject.set("LegalInfo[safetyMeasures]", safetyMeasures);
    formDataObject.set(
      "LegalInfo[businessRegistrationDetails]",
      businessRegistrationDetails
    );
    formDataObject.set("LegalInfo[taxComplianceStatus]", taxComplianceStatus);
    formDataObject.set(
      "LegalInfo[healthAndSafetyCertifications]",
      healthAndSafetyCertifications
    );
    formDataObject.set("LegalInfo[fireSafetyCompliance]", fireSafetyCompliance);

    // Append EnvirInfo fields
    formDataObject.set(
      "EnvirInfo[sustainabilityPractices]",
      sustainabilityPractices
    );
    formDataObject.set(
      "EnvirInfo[noisePollutionControls]",
      noisePollutionControls
    );

    // Append VendorsInfo fields
    formDataObject.set(
      "VendorsInfo[preferredCateringVendor]",
      preferredCateringVendor
    );
    formDataObject.set(
      "VendorsInfo[preferredDesignAndDecorVendor]",
      preferredDesignAndDecorVendor
    );
    formDataObject.set(
      "VendorsInfo[preferredTravelVendor]",
      preferredTravelVendor
    );
    formDataObject.set(
      "VendorsInfo[preferredBeautyVendor]",
      preferredBeautyVendor
    );
    formDataObject.set(
      "VendorsInfo[preferredPhotographyVendor]",
      preferredPhotographyVendor
    );
    formDataObject.set(
      "VendorsInfo[preferredEventPlanningVendor]",
      preferredEventPlanningVendor
    );
    formDataObject.set(
      "VendorsInfo[preferredAudioVisualEquipmentVendor]",
      preferredAudioVisualEquipmentVendor
    );
    formDataObject.set(
      "VendorsInfo[preferredEntertainmentVendor]",
      preferredEntertainmentVendor
    );
    formDataObject.set(
      "VendorsInfo[preferredAccommodationVendor]",
      preferredAccommodationVendor
    );
    formDataObject.set(
      "VendorsInfo[preferredPrintingAndSignageVendor]",
      preferredPrintingAndSignageVendor
    );
    formDataObject.set(
      "VendorsInfo[preferredSecurityServicesVendor]",
      preferredSecurityServicesVendor
    );

    formDataObject.set("DemographicInfo[targetAudience]", targetAudience);
  formDataObject.set("DemographicInfo[competitiveLandscape]", competitiveLandscape);
  formDataObject.set(
    "user",
    user.name
  );
    // console.log(formDataObject);
   

    await dispatch(createVenue(formDataObject));
    setSubmissionStatus("success"); // Set the submission status to success
  } catch (error) {
    setSubmissionStatus("error"); // Set the submission status to error
  }
  };

  const stepsMobile = ["B", "L", "S", "B", "P", "L", "E", "PV", "D", "V"];
  const steps = [<FontAwesomeIcon icon={faCircleInfo} size="2xl" />, <FontAwesomeIcon icon={faLocationDot} size="2xl" />, <FontAwesomeIcon icon={faScrewdriverWrench} size="2xl" />,<FontAwesomeIcon icon={faCashRegister} size="2xl" />,<FontAwesomeIcon icon={faClockRotateLeft} size="2xl" />,<FontAwesomeIcon icon={faGavel} size="2xl" />,<FontAwesomeIcon icon={faTree} size="2xl" />,<FontAwesomeIcon icon={faTruckField} size="2xl" />,<FontAwesomeIcon icon={faUsers} size="2xl" />,<FontAwesomeIcon icon={faFileContract} size="2xl" />,];
  // const steps = [<FontAwesomeIcon icon={faCircleInfo} size="2xl" />, 'Location Information', 'Services and Amenities','Booking Information','Past Event Information','Legal and Compliance Information','Environmental Impact','Preferred Vendors','Demographic and Market Data','Verification',];

  return (
    <div className="container">
    {/* <div className="refer">
  
    <button type="button" className="back-button" >
    <FontAwesomeIcon icon={faBackward} />&nbsp;&nbsp; <FontAwesomeIcon icon={faHouse} />
    </button>
</div> */}
      <div >
      {submissionStatus === "success" && (
        <p className="success-message">Venue created successfully!</p>
      )}
      {submissionStatus === "error" && (
        <p className="error-message">An error occurred. Please try again.</p>
      )}
      <div className="stepper">
     
   
        {steps.map((stepLabel, index) => (
          <div
            key={index}
            className={`step ${step === index + 1 ? "active" : ""} ${
        step > index + 1 ? "previous" : ""
      }`}
          >
            {/* <h1 className="steplabel"> {stepLabel}</h1> */}
           {stepLabel}
          </div>
        ))}
        </div>
{/* <div className="stepper">
        {stepsMobile.map((stepLabel, index) => (
          <div
            key={index}
            className={`step ${step === index + 1 ? "active" : ""}`}
          >
            <h1 className="steplabel"> {stepLabel}</h1>
        
          </div>
        ))}
        </div> */}
      </div>
      <div>
        <form
          className="createForm"
          encType="multipart/form-data"
          onSubmit={handleSubmit}
        >
          {step === 1 && (
            <Step1 data={formData.basicInfo} handleChange={handleChange} />
          )}
          {step === 2 && (
            <Step2 data={formData.locationInfo} handleChange={handleChange} />
          )}
          {step === 3 && (
            <Step3 data={formData.ServicesInfo} handleChange={handleChange} />
          )}
          {step === 4 && (
            <Step4
              data={formData.BookingInfo}
              handleChange={handleChange}
              setDateRange={handleDateRangeChange}
            />
          )}
          {step === 5 && (
            <Step5 data={formData.PastEventInfo} handleChange={handleChange} />
          )}
          {step === 6 && (
            <Step6 data={formData.LegalInfo} handleChange={handleChange} />
          )}
          {step === 7 && (
            <Step7 data={formData.EnvirInfo} handleChange={handleChange} />
          )}
          {step === 8 && (
            <Step8 data={formData.VendorsInfo} handleChange={handleChange} />
          )}
          {step === 9 && (
            <Step9 data={formData.DemographicInfo} handleChange={handleChange} />
          )}

          {step === 10 && (
            <Step10 formData={formData} handleSubmit={handleSubmit} />
          )}

          <div className="form-buttons">
            {step > 1 && (
              <button type="button" onClick={() => setStep(step - 1)}>
                Previous
              </button>
            )}
            {step < 10 && (
              <button type="button" onClick={() => setStep(step + 1)}>
                Next
              </button>
            )}
          </div>
        </form>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <>{error && <p className="error-message">{error}</p>}</>
      )}
    </div>
  );
};

export default Main;
