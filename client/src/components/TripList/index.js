import React from "react";
import { Link } from "react-router-dom";

const TripList = ({ trips }) => {
  return (
    <div>
      <table
        style={{ width: "100%", textAlign: "left", borderCollapse: "collapse" }}
      >
        <thead>
          <tr>
            <th>First Name</th>
            <th>From Date</th>
            <th>To Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {trips.map((trip) => (
            <tr key={trip._id}>
              <td>{trip.firstName}</td>
              <td>
                {("0" + new Date(+trip.fromDateTime).getDate()).slice(-2)}/
                {("0" + (new Date(+trip.fromDateTime).getMonth() + 1)).slice(
                  -2
                )}
                /{new Date(+trip.fromDateTime).getFullYear()}
              </td>
              <td>
                {("0" + new Date(+trip.toDateTime).getDate()).slice(-2)}/
                {("0" + (new Date(+trip.toDateTime).getMonth() + 1)).slice(-2)}/
                {new Date(+trip.toDateTime).getFullYear()}
              </td>

              <td>
                <Link to={`/updatetrip/${trip._id}`}>Edit</Link>
                &nbsp; &nbsp;
                <Link to={`/deletetrip/${trip._id}`}>Delete</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TripList;
