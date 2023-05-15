import React, { useState } from "react";

const AddTrip = ({ trip, onSubmit }) => {
  const [firstName, setFirstName] = useState(trip ? trip.firstName : "");
  const [lastName, setLastName] = useState(trip ? trip.lastName : "");
  const [fromDate, setFromDate] = useState(trip ? trip.fromDate : "");
  const [toDate, setToDate] = useState(trip ? trip.toDate : "");
  const [manager, setManager] = useState(trip ? trip.manager : "");
  const [approved, setApproved] = useState(trip ? trip.approved : false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit", {
      firstName,
      lastName,
      fromDate,
      toDate,
      manager,
      approved,
    }); // Added console log
    onSubmit({ firstName, lastName, fromDate, toDate, manager, approved });
  };

  return (
    <>
      <h1>All Trips</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "grid",
          gridTemplateColumns: "auto 1fr",
          gap: "0.5rem",
          alignItems: "center",
        }}
      >
        <label htmlFor="firstName">First Name:</label>
        <input
          id="firstName"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <label htmlFor="lastName">Last Name:</label>
        <input
          id="lastName"
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <label htmlFor="fromDate">From Date:</label>
        <input
          id="fromDate"
          type="date"
          value={fromDate}
          onChange={(e) => setFromDate(e.target.value)}
        />

        <label htmlFor="toDate">To Date:</label>
        <input
          id="toDate"
          type="date"
          value={toDate}
          onChange={(e) => setToDate(e.target.value)}
        />

        <label htmlFor="manager">Manager:</label>
        <input
          id="manager"
          type="text"
          value={manager}
          onChange={(e) => setManager(e.target.value)}
        />

        <label htmlFor="approved">Approved:</label>
        <input
          id="approved"
          type="checkbox"
          checked={approved}
          onChange={() => setApproved(!approved)}
        />

        <button type="submit" style={{ gridColumn: "span 2" }}>
          Submit
        </button>
      </form>
      {/* <div style={{ width: '100%', height: '400px' }}>
              {<AddMap />}
     </div> */}
    </>
  );
};

export default AddTrip;
