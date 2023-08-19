import React, { Fragment, useState, useEffect, useRef } from "react";
import "./HorizontalCard.css"; // Import your CSS file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { getAllVenues } from "../actions/venueActions";
import { useSelector, useDispatch } from "react-redux";
import Nav from "./body/Nav"

const HorizontalCard = () => {
  // Dummy data
  const data = {
    venueName: "Sample Venue",
    address: "1234 Main Street, City",
    phoneNumber: "+91 94545 89562",
    email: "sample@example.com",
    id: "Card ID",
    date: "2023-08-17",
  };

  const venues = useSelector((state) => state.venue.venues);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllVenues());
  }, [dispatch]);

  return (
    <div>

   <Nav/>
    <div className="horizontal-card-container">
      {venues.map((venue) => (
        <div className="horizontal-card">
          <div>
            <div className="info">


              <div className="left">
                <div className="top">{venue.basicInfo.venueName}</div>
                <div className="bottom">{venue.basicInfo.venueAddress}</div>
              </div>

              <div className="right">
                <div className="top">{venue.basicInfo.venueType}</div>
                <div className="bottom">{venue.basicInfo.venueOwner}</div>
              </div>

              <div className="actions">
                <div className="top icon">
                  <FontAwesomeIcon icon={faPencil} />
                </div>
                <div className="bottom icon">
                  <FontAwesomeIcon icon={faTrash} />
                </div>
              </div>


            </div>
          </div>
          
          <div className="creator">
            <div>{venue.user}</div>
            <div>Created By : </div>
          </div>
        </div>
      ))}
    </div>

    </div>
  );
};

export default HorizontalCard;
