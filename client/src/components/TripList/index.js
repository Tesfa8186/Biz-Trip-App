// components/TripList.js
import React from 'react';

const TripList = ({ trips }) => {
  return (
    <div>
      {trips.map((trip) => (
        <div key={trip._id} style={{ marginBottom: '1rem' }}>
          <h3>
            {trip.firstName} {trip.lastName}
          </h3>
          <p>
            From: {trip.fromDateTime} To: {trip.toDateTime}
          </p>
          <p>Manager: {trip.managerName}</p>
          <p>Approved: {trip.approved ? 'Yes' : 'No'}</p>
          <h4>Waypoints:</h4>
          <ul>
            {trip.path.map((waypoint, index) => (
              <li key={index}>
                {waypoint.lat} {waypoint.lon}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default TripList;
