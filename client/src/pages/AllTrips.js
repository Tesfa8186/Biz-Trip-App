import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_TRIPS } from '../utils/queries';
import TripList from '../components/TripList';
import Auth from '../utils/auth'; // make sure you import the Auth
import { Navigate } from 'react-router-dom';
import '../styles/AllTrips.css';

const AllTrips = () => {
  const { loading, data, refetch } = useQuery(QUERY_TRIPS);
  const trips = data?.trips || [];

  useEffect(() => {
    refetch();
  }, [refetch]);

  // Check if user is authenticated
  if (!Auth.loggedIn()) {
    return <Navigate to="/" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1 className="titleStyle">All Trips</h1>
      <TripList trips={trips} />
    </>
  );
};

export default AllTrips;
