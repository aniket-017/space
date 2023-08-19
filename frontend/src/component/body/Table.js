import React, { Fragment, useState, useEffect, useRef } from 'react'
import "./table.css"
import MetaData from '../layout/MetaData';
import { getAllVenues } from '../../actions/venueActions';
import { useSelector, useDispatch } from "react-redux";


// const venues = [
//   {
//     id: 1,
//     venueName: "Example Venue 1",
//     venueAddress: "123 Main Street, City",
//     venueType: "Indoor",
//     venueCategory: "Conference Center",
//     establishmentYear: "2020-05-15T00:00:00Z",
//     ownershipType: "Private",
//     availability: ["2023-08-15T00:00:00Z", "2023-08-20T00:00:00Z"],
//   },
//   {
//     id: 2,
//     venueName: "Sample Venue 2",
//     venueAddress: "456 Park Avenue, Town",
//     venueType: "Outdoor",
//     venueCategory: "Park",
//     establishmentYear: "2015-10-10T00:00:00Z",
//     ownershipType: "Public",
//     availability: ["2023-09-01T00:00:00Z", "2023-09-10T00:00:00Z"],
//   },
//   // Add more dummy venue objects as needed
// ];


const Table = () => {

  const venues = useSelector((state) => state.venue.venues);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllVenues());
  }, [dispatch]);

  return (
    <Fragment>
    <MetaData title="Table Page is " />
    <table className="venue-table">
            <thead>
              <tr>
                <th>Venue Name</th>
                <th>Venue Address</th>
                <th>Venue Type</th>
                <th>Venue Category</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {venues.map((venue) => (
                <tr key={venue.id}>
                  <td></td>
                  <td>{venue.basicInfo.venueAddress}</td>
                  <td>{venue.basicInfo.venueType}</td>
                  <td>{venue.basicInfo.venueOwner}</td>
                  

                  <tr>
                    <td>
                      <button
                        className="delete-btn"
                        // onClick={() => deleteVenueHandler(venue._id)}
                      >
                        Delete
                      </button>
                      <button
                        className="update-btn"
                        // onClick={() => handleUpdateClick(venue)}
                      >
                        Update
                      </button>
                    </td>
                  </tr>
                  {/* Other venue details */}
                </tr>
              ))}
            </tbody>
          </table>
          </Fragment>

  )
}

export default Table