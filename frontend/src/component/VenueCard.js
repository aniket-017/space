import React from 'react';
import './VenueCard.css'; // Import your CSS file

const VenueCard = () => {
  // Dummy data array
  const dataArr = [
    {
      name: 'Sample Venue 1',
      address: '1234 Main Street, City 1',
      phoneNumber: '+91 98561 56478',
      email: 'venue1@example.com',
      date: '2023-08-17',
      creator: 'John Doe',
    },
    {
      name: 'Sample Venue 2',
      address: '5678 Second Ave, City 2',
      phoneNumber: '+91 98765 43210',
      email: 'venue2@example.com',
      date: '2023-08-18',
      creator: 'Jane Smith',
    },
    // Add more data entries as needed
  ];

  return (
    <div className="venue-cards-container">
      {dataArr.map((data, index) => (
        <div key={index} className="venue-card">
          <div className="info">
            <div className="vertical-info">
              <div className="label">Name:</div>
              <div className="value">{data.name}</div>
            </div>
            <div className="vertical-info">
              <div className="label">Address:</div>
              <div className="value">{data.address}</div>
            </div>
            <div className="vertical-info">
              <div className="label">Phone:</div>
              <div className="value">{data.phoneNumber}</div>
            </div>
            <div className="vertical-info">
              <div className="label">Email:</div>
              <div className="value">{data.email}</div>
            </div>
          </div>
          <div className="actions">
            <div className="update-delete">
              <div className="icon">Update</div>
              <div className="icon">Delete</div>
            </div>
            <div className="metadata">
              <div className="date">{data.date}</div>
              <div className="creator">Created by: {data.creator}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VenueCard;
