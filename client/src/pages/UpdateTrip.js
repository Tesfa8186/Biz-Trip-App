import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_TRIP } from '../utils/queries'; // Import the GET_TRIP query
import EditTrip from '../components/EditTrip';
import Auth from '../utils/auth'; // Import the Auth object

const UpdateTrip = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(Auth.loggedIn());
  const { id } = useParams(); // Get the trip ID from the URL
  const { loading, error, data } = useQuery(GET_TRIP, {
    variables: { tripId: id },
  });

  useEffect(() => {
    setIsLoggedIn(Auth.loggedIn());
  }, []);

  const handleEditTripSubmit = (updatedTrip) => {
    // ... Logic for submitting the updated trip data goes here
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!isLoggedIn) return <Navigate to="/" />;

  return (
    <div>
      {/* <h2>Update Trip</h2> */}
      <EditTrip trip={data.trip} onSubmit={handleEditTripSubmit} />
    </div>
  );
};

export default UpdateTrip;

