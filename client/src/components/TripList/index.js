// components/TripList.js
import React from 'react';

const TripList = ({ trips }) => {
  return (
    <div>
      {trips.map((trip) => (
        <div key={trip._id} style={{ marginBottom: '1rem' }}>

          {/* <h3>
            {trip.firstName}
          </h3>

          <p>
            From: {("0" + new Date(+trip.fromDateTime).getDate()).slice(-2)}/{("0" + (new Date(+trip.fromDateTime).getMonth() + 1)).slice(-2)}/{new Date(+trip.fromDateTime).getFullYear()}
            &nbsp;
            To: {("0" + new Date(+trip.toDateTime).getDate()).slice(-2)}/{("0" + (new Date(+trip.toDateTime).getMonth() + 1)).slice(-2)}/{new Date(+trip.toDateTime).getFullYear()}
          </p>

          <p>Manager: {trip.managerName}</p>
          <p>Approved: {trip.approved ? 'Yes' : 'No'}</p>
          <h4>Waypoints:</h4>
          
          <ul>
            {trip.path.map((waypoint, index) => (
              <li key={index}>
                {waypoint.name}  {waypoint.lat} {waypoint.lon}
              </li>
            ))}
          </ul> */}



          <h3>
            {trip.firstName}
            From: {("0" + new Date(+trip.fromDateTime).getDate()).slice(-2)}/{("0" + (new Date(+trip.fromDateTime).getMonth() + 1)).slice(-2)}/{new Date(+trip.fromDateTime).getFullYear()}
            &nbsp;
            To: {("0" + new Date(+trip.toDateTime).getDate()).slice(-2)}/{("0" + (new Date(+trip.toDateTime).getMonth() + 1)).slice(-2)}/{new Date(+trip.toDateTime).getFullYear()}
          </h3>


          {/* <button
            className="btn edit"
            title="Edit"
            onClick={() => handleEdit(trip)}
          >
            <i className="fas fa-pencil-alt"></i>
          </button>

          <button
            className="btn delete"
            title="Delete"
            onClick={() => {
              const response = window.confirm("Delete?");
              if (response) {
                handleDelete(trip._id);
              }
            }}
          >
            <i className="far fa-trash-alt"></i>
          </button> */}






        </div>
      ))}
    </div>
  );
};

export default TripList;
