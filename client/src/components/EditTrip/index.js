
import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { useParams, useNavigate } from 'react-router-dom';
import { UPDATE_TRIP } from '../../utils/mutations';

const EditTrip = ({ trip, onSubmit }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const formatDate = (date) => {
    const d = new Date(+date);
    return `${d.getFullYear()}-${("0" + (d.getMonth() + 1)).slice(-2)}-${("0" + d.getDate()).slice(-2)}`;
  };

  const [firstName, setFirstName] = useState(trip.firstName);
  const [lastName, setLastName] = useState(trip.lastName);
  const [fromDate, setFromDate] = useState(formatDate(trip.fromDateTime));
  const [toDate, setToDate] = useState(formatDate(trip.toDateTime));
  const [manager, setManager] = useState(trip.managerName);
  const [approved, setApproved] = useState(trip.approved);

  const [updateTrip] = useMutation(UPDATE_TRIP);

  useEffect(() => {
    setFirstName(trip.firstName);
    setLastName(trip.lastName);
    setFromDate(formatDate(trip.fromDateTime));
    setToDate(formatDate(trip.toDateTime));
    setManager(trip.managerName);
    setApproved(trip.approved);
  }, [trip]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateTrip({
      variables: {
        tripId: id,
        firstName,
        lastName,
        fromDateTime: fromDate,
        toDateTime: toDate,
        managerName: manager,
        approved,
        path: trip.path.map((waypoint) => waypoint._id),
      },
    });
    onSubmit({
      ...trip,
      firstName,
      lastName,
      fromDateTime: fromDate,
      toDateTime: toDate,
      managerName: manager,
      approved,
    });
    navigate('/triplist');
  };
  return (
    <>
      <h1>Edit Trip</h1>
      <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '0.5rem', alignItems: 'center' }}>
        <label htmlFor="firstName">First Name:</label>
        <input id="firstName" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />

        <label htmlFor="lastName">Last Name:</label>
        <input id="lastName" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />

        <label htmlFor="fromDate">From Date:</label>
        <input id="fromDate" type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} />

        <label htmlFor="toDate">To Date:</label>
        <input id="toDate" type="date" value={toDate} onChange={(e) => setToDate(e.target.value)} />

        <label htmlFor="manager">Manager:</label>
        <input id="manager" type="text" value={manager} onChange={(e) => setManager(e.target.value)} />

        <label htmlFor="approved">Approved:</label>
        <input id="approved" type="checkbox" checked={approved} onChange={() => setApproved(!approved)} />

        <button type="submit" style={{ gridColumn: 'span 2' }}>Submit</button>
      </form>
    </>
  );
};

export default EditTrip;

