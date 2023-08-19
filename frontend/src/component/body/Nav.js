import React, { useState } from "react";
import './Nav.css'; // Import your CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPlus, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import Main from "./Main"
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const [showMain, setShowMain] = useState(false);
  const navigate = useNavigate();

  const handleAddVenueClick = () => {
    navigate('/main');
  };

  return (
    <div className="nav-container">
      <div className="logo">Company Logo</div>
      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
      </div>
      <div className="buttons">
        <button className="add-venue" onClick={handleAddVenueClick}>
          <FontAwesomeIcon icon={faPlus} />
          Add Venue
        </button>
        <button className="logout">
          <FontAwesomeIcon icon={faSignOutAlt} />
          Log Out
        </button>
      </div>
     
    </div>
  );
};

export default Nav;
